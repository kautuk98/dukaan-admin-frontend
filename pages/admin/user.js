import React from "react";
import Link from "next/link";
import Head from "../../components/head";
import Layout from "../../components/layout";
import CompleteOrders from "../../components/CompleteOrder";
import AddUser from "../../components/AddUser";
import NewPayment from "../../components/NewPayment";
import CheckLogin from "../../components/CheckLogin";
// import "semantic-ui-css/semantic.min.css";
import moment from "moment";
// import axios from "axios";
// import PartialPayments from "../components/PartialPayments";
import RefundedOrders from "../../components/RefundedOrders";
import { resolve } from "url";
import userController from "../../controllers/users";
import purchasesController from "../../controllers/purchases";
import swal from "sweetalert2";
import ActiveOrders from "../../components/ActiveOrders";
import SingleUserDetail from "../../components/SingleUserDetail";
import AsyncSelect from "react-select/async";

import axios from "axios";

class Home extends React.Component {
  // static async getInitialProps({ query }) {
  //   console.log(query, "gggggg");
  //   return { userid: query.id };
  // }
  constructor(props) {
    super(props);
    this.state = {
      queryId: "",
      completeTab: true,
      activeTab: false,
      refundedTab: false,
      userFound: false,
      userInfo: [],
      courseInfo: {},
      newpayment: false,
      selectedUser: {}
    };
  }

  componentDidMount() {
    const userid = window.location.search.split("=")[1];
    userController.handleGetUserById(userid).then(res => {
      console.log(res, "userrrrr1");
      this.setState({
        selectedUser: res.data,
        newpayment: true
      });
    });
  }

  toggleCompleteTab = () => {
    this.setState(prevstate => ({
      completeTab: true,
      activeTab: false,
      refundedTab: false
    }));
  };

  toggleActiveTab = () => {
    this.setState(prevstate => ({
      completeTab: false,
      activeTab: true,
      refundedTab: false
    }));
  };

  toggleRefundTab = () => {
    this.setState(prevstate => ({
      completeTab: false,
      activeTab: false,
      refundedTab: true
    }));
  };

  handleGetPaymentForUser = user => {
    purchasesController
      .handleGetPurchases(user.id)
      .then(res => {
        console.log(res.data);
        if (res.data) {
          this.setState({
            courseInfo: res.data
          });
        } else {
          this.setState({
            courseInfo: {}
          });
        }
      })
      .catch(error => {
        swal.fire({
          title: "Error searching for user's purchases!",
          html: error,
          type: "error"
        });
      });
  };

  handleNewPayment = user => {
    this.setState({
      selectedUser: user,
      newpayment: true
    });
  };

  showOrders = user => {
    // console.log(user, "user2323");
    // this.handleGetPaymentForUser(user);
    // console.log(this.state.selectedUser.id, "iddd");
    this.setState({
      newpayment: false
    });
  };

  render() {
    let orders;
    const completeTab = this.state.completeTab;
    const refundTab = this.state.refundedTab;
    const activeTab = this.state.activeTab;
    if (refundTab) {
      if (
        this.state.courseInfo.refundedPayments &&
        this.state.courseInfo.refundedPayments.length > 0
      ) {
        orders = this.state.courseInfo.refundedPayments.map(refundedOrder => {
          const date = moment(refundedOrder.created_at).format(
            "MMMM Do YYYY,h:mm:ss a"
          );
          const txn_arr = refundedOrder.cart.transactions.filter(
            transaction => transaction.status === "captured"
          );
          // console.log(txn_arr, "object txn");
          const txn_id = txn_arr[0].id;
          console.log(refundedOrder.cart.transactions, "transact");

          return (
            <RefundedOrders
              key={refundedOrder.id}
              // TODO: this is the txnId used to get refund details
              txn_id={txn_id}
              status={refundedOrder.status}
              description={refundedOrder.product.description}
              invoice_url={refundedOrder.invoice_link}
              amountLeft={refundedOrder.amountLeft}
              partial_payment={refundedOrder.partial_payment}
              date={date}
              image={refundedOrder.product.image_url}
              product_name={refundedOrder.product.name}
              amount={refundedOrder.amount / 100}
              created_at={refundedOrder.created_at}
              userid={this.state.selectedUser.id}
              oneauthid={this.state.selectedUser.oneauth_id}
              cart_id={refundedOrder.cart_id}
            />
          );
        });
      } else {
        orders = <div>No Refunded Orders Found.</div>;
      }
    } else if (completeTab) {
      if (
        this.state.courseInfo.completedPayments &&
        this.state.courseInfo.completedPayments.length > 0
      ) {
        orders = this.state.courseInfo.completedPayments.map(completeOrder => {
          const date = moment(completeOrder.created_at).format(
            "MMMM Do YYYY,h:mm:ss a"
          );
          return (
            <CompleteOrders
              date={date}
              txn_id={completeOrder.cart.transactions[0].id}
              key={completeOrder.id}
              image={completeOrder.product.image_url}
              product_name={completeOrder.product.name}
              status={completeOrder.status}
              amount={completeOrder.amount / 100}
              invoice_url={completeOrder.invoice_link}
              refunded={completeOrder.cart.transactions[0].status}
              userid={this.state.selectedUser.id}
              payment_type={completeOrder.cart.transactions[0].payment_type}
              description={completeOrder.product.description}
              partial_payment={completeOrder.partial_payment}
              cart_id={completeOrder.cart.id}
            />
          );
        });
      } else {
        orders = <div>No Completed Orders Found.</div>;
      }
    } else if (activeTab) {
      if (
        this.state.courseInfo.activePayments &&
        this.state.courseInfo.activePayments.length > 0
      ) {
        orders = this.state.courseInfo.activePayments.map(activeOrder => {
          const date = moment(activeOrder.created_at).format(
            "MMMM Do YYYY,h:mm:ss a"
          );

          return (
            <ActiveOrders
              amountLeft={activeOrder.amountLeft}
              partial_payment={activeOrder.partial_payment}
              date={date}
              status={activeOrder.status}
              key={activeOrder.id}
              image={activeOrder.product.image_url}
              product_name={activeOrder.product.name}
              amount={activeOrder.amount / 100}
              created_at={activeOrder.created_at}
              userid={this.state.selectedUser.id}
              oneauthid={this.state.selectedUser.oneauth_id}
              cart_id={activeOrder.cart_id}
              description={activeOrder.product.description}
            />
          );
        });
      } else {
        orders = <div>No Active Orders Found.</div>;
      }
    }

    return (
      <CheckLogin>
        <div>
          <Head title="Coding Blocks | Dukaan" />
          <Layout>
            <div className="container mt-4">
              <div className="row">
                {/* Form 2  */}
                <div className="row mx-0 w-100 mt-4">
                  {this.state.selectedUser && (
                    <div className={"col-md-4"}>
                      <div key={this.state.selectedUser.id}>
                        <SingleUserDetail
                          userInfo={this.state.selectedUser}
                          showOrders={this.showOrders}
                          handleNewPayment={this.handleNewPayment}
                          newPaymentState={this.state.handleNewPayment}
                        />
                      </div>
                    </div>
                  )}

                  {!this.state.newpayment ? (
                    <div className="col-md-8 col-12">
                      <div className="border-card br-20 bg-light-grey mb-5 w-100">
                        <div className="tab-nav-underline mb-5">
                          <div
                            className={
                              this.state.activeTab ? "tab active" : "tab"
                            }
                            onClick={this.toggleActiveTab}
                          >
                            Active Orders
                          </div>
                          <div
                            className={
                              this.state.completeTab ? "tab active" : "tab"
                            }
                            onClick={this.toggleCompleteTab}
                          >
                            Completed Orders
                          </div>

                          <div
                            className={
                              this.state.refundedTab ? "tab active" : "tab"
                            }
                            onClick={this.toggleRefundTab}
                          >
                            Refunded Orders
                          </div>
                        </div>
                        <div style={{ marginBottom: "1.8vh" }}>{orders}</div>
                      </div>
                    </div>
                  ) : (
                    <NewPayment
                      userid={this.state.selectedUser.oneauth_id}
                      id={this.state.selectedUser.id}
                    />
                  )}
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </CheckLogin>
    );
  }
}

export default Home;
