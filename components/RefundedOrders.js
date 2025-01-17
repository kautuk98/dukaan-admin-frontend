import React from "react";
import Modal from "react-modal";
import Price from "./Price";
import moment from "moment";
import { axios } from "../DukaanAPI";
import refundController from "../controllers/refund";
import userController from "../controllers/users";
import Swal from "sweetalert2";
import Link from "next/link";

const customStyles = {
  content: {
    top: "48%",
    left: "50%",
    marginRight: "-50%",
    height: "65%",
    width: "40%",
    transform: "translate(-50%, -50%)",
    ariaHideApp: "false",
    borderRadius: "2vh",
    padding: "5vh"
  }
};
class RefundedOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRefundDetailModal: false,
      refundDetail: {},
      paymentMethod: this.props.payment_type,
      formValues: {
        payment_type: "credits",
        user_id: this.props.userid,
        txn_id: this.props.txn_id
      }
    };
  }

  handleRefundDetails = () => {
    refundController
      .handleGetRefundFromTxnId(this.props.txn_id)
      .then(res => {
        console.log(res.data, "refund");
        this.setState({
          firstname: res.data.refunded_created_by.firstname,
          lastname: res.data.refunded_created_by.lastname,
          refundDetail: res.data,
          showRefundDetailModal: true
        });
      })
      .catch(error => {
        Swal.fire({
          type: "error",
          title: "Error fetching refunds",
          text: error
        });
      });
  };

  closeRefundDetailModal = () => {
    this.setState({
      showRefundDetailModal: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.showRefundDetailModal}
          onRequestClose={this.closeRefundDetailModal}
          style={customStyles}
        >
          <h3 className="red">Refund Details</h3>
          <div className="divider-h mb-4 mt-2" />
          <div>
            <div className="font-mds">
              <h2>Amount Refunded: </h2>{" "}
              <Price amount={this.state.refundDetail.amount_paid / 100} />
            </div>
            <div className="divider-h mb-4 mt-2" />
            <div className="font-mds">
              <h2>Refunded By: </h2> {this.state.firstname}{" "}
              {this.state.lastname}
            </div>
            <div className="divider-h mb-4 mt-2" />
            <div className="font-mds">
              <h2>Payment Mode:</h2>{" "}
              {this.state.refundDetail.cheque ? "cheque" : "credits"}
            </div>
            <div className="divider-h mb-4 mt-2" />
            <div>
              <div className="divider-h mb-4 mt-2" />
              <div className="font-mds">
                <h2>Refund Date: </h2>{" "}
                {moment(this.state.refundDetail.created_at).format(
                  "MMMM Do YYYY,h:mm:ss a"
                )}
              </div>
              <div className="divider-h mb-4 mt-2" />
              {this.state.refundDetail.cheque ? (
                <div>
                  <div className="font-mds">
                    <h2>Bank Name: </h2> {this.state.refundDetail.cheque.bank}
                  </div>

                  <div className="divider-h mb-4 mt-2" />
                  <div className="font-mds">
                    <h2>Branch Name: </h2>{" "}
                    {this.state.refundDetail.cheque.branch}
                  </div>
                  <div className="divider-h mb-4 mt-2" />
                  <div className="font-mds">
                    <h2>Cheque Serial No.: </h2>{" "}
                    {this.state.refundDetail.cheque.serial_number}
                  </div>

                  <div className="divider-h mb-4 mt-2" />
                  <div className="font-mds">
                    <h2>Location: </h2>{" "}
                    {this.state.refundDetail.cheque.location}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Modal>

        <div className="row justify-content-center p-4">
          <div
            className="border-card pt-4 mb-4"
            style={{ borderColor: "#a3076c", borderWidth: ".2vh" }}
          >
            <div className="row justify-content-between align-items-center">
              <div className="img-desc col-md-8 col-12 mb-4 mb-md-0">
                <div className="col-md-3 col-4">
                  <img className="round" src={this.props.image} alt="" />
                </div>
                <div className="description justify-content-center">
                  <div>
                    <h4>{this.props.product_name}</h4>
                    <div className="grey font-sm">{this.props.description}</div>
                  </div>
                </div>
              </div>
              <div style={{ color: "#a3076c", fontSize: "1.5rem" }}>
                <strong>
                  {this.props.status === "partially_refunded"
                    ? "Partially Refunded"
                    : "Refunded"}
                </strong>
                <i className="fa fa-check ml-2" aria-hidden="true" />{" "}
              </div>

              <div className="col-md-12">
                <div className="col-md-5 px-0 pt-4 mr-3 mb-4">
                  <Price amount={this.props.amount} />
                </div>
                <div className="font-sm grey">
                  Purchased on {this.props.date}
                </div>
              </div>
            </div>
            <div className="divider-h mt-4 mb-4" />
            <div className="d-flex justify-content-between">
              {!this.props.partial_payment ? (
                <div>
                  <a href={this.props.invoice_url} target="blank">
                    <button className="button-solid lg">View Invoice</button>
                  </a>
                  <button
                    id="view-invoice"
                    className="button-solid ml-4 mb-2 mt-4 pl-5 pr-5 lg"
                    type="submit"
                    onClick={this.handleRefundDetails}
                  >
                    Refund Details
                  </button>
                </div>
              ) : (
                ""
              )}

              {this.props.partial_payment ? (
                <Link
                  href={`/admin/PartialHistory?userId=${
                    this.props.userid
                  }&cart_id=${this.props.cart_id}`}
                >
                  <button className="button-solid lg">
                    View all Transactions
                  </button>
                </Link>
              ) : (
                ""
              )}
              <input id="orderIdInput" type="hidden" />
              <div className="row justify-content-center">
                <a target="blank" id="anchorInvoiceUpdate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RefundedOrders;
