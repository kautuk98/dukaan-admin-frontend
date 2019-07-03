webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AddUser.js":
/*!*******************************!*\
  !*** ./components/AddUser.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FieldWithElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FieldWithElement */ "./components/FieldWithElement.js");
/* harmony import */ var _styles_pages_admin_coupons_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/pages/admin/coupons.scss */ "./styles/pages/admin/coupons.scss");
/* harmony import */ var _styles_pages_admin_coupons_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_admin_coupons_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "/Users/tathagatthapliyal/Desktop/MyGems/Projects/CodingBlocks/dukaan-admin-frontend/components/AddUser.js";





var AddUser =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AddUser, _React$Component);

  function AddUser(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddUser);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AddUser).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeValue", function (e) {
      var newFormValues = _this.state.formValues;
      newFormValues[e.target.name] = e.target.value;

      _this.setState({
        formValues: newFormValues
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var data, formBody, property, encodedKey, encodedValue, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                data = _this.state.formValues;
                formBody = [];

                for (property in data) {
                  encodedKey = encodeURIComponent(property);
                  encodedValue = encodeURIComponent(data[property]);
                  formBody.push(encodedKey + "=" + encodedValue);
                }

                formBody = formBody.join("&");
                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("http://localhost:2929/api/v2/admin/users", formBody, {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "dukaan-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNsaWVudE5hbWUiOiJvbmxpbmVDYiIsIm9uZWF1dGhJZCI6MTQ1OSwicHJvZHVjdElkIjoxNTYsInF1YW50aXR5IjoxfSwiaWF0IjoxNTYwMjQwNzkwfQ.x6pSdQA2bQndnnMoxSgwn6GdKiPmm82E8AE2BPIPRRQ"
                  }
                });

              case 7:
                response = _context.sent;
                console.log(response);

                _this.setState({
                  formValues: {}
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      formValues: {
        username: "test1",
        firstname: "test1",
        lastname: "test1",
        gender: "male",
        dial_code: "+91",
        mobile_number: "+91-2222222222",
        colleges: [],
        branches: [],
        collegeId: [],
        branchId: [],
        gradYear: "2020",
        email: "e@e.com"
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddUser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("http://localhost:2929/api/v2/admin/resources/demographics", {
        headers: {
          "dukaan-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNsaWVudE5hbWUiOiJvbmxpbmVDYiIsIm9uZWF1dGhJZCI6MTQ1OSwicHJvZHVjdElkIjoxNTYsInF1YW50aXR5IjoxfSwiaWF0IjoxNTYwMjQwNzkwfQ.x6pSdQA2bQndnnMoxSgwn6GdKiPmm82E8AE2BPIPRRQ"
        }
      }).then(function (res) {
        console.log(res);
        var newFormValues = _this2.state.formValues;
        newFormValues.colleges = res.data.colleges; // newFormValues.collegeId = res.data.colleges.id;

        newFormValues.branches = res.data.branches;

        _this2.setState({
          formValues: newFormValues
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "d-flex align-items-center col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "border-card coupon-card ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "d-flex justify-content-center mt-1 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "title red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Create User")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        nameCols: 3,
        elementCols: 9,
        name: "Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "input-text icon user-bg",
        placeholder: "Username",
        name: "username",
        onChange: this.onChangeValue,
        value: this.state.formValues.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        nameCols: 3,
        elementCols: 9,
        name: "Firstname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "input-text icon lines-bg",
        placeholder: "First Name",
        name: "firstname",
        onChange: this.onChangeValue,
        value: this.state.formValues.firstname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        nameCols: 3,
        elementCols: 9,
        name: "Lastname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "input-text icon lines-bg",
        placeholder: "Last Name",
        name: "lastname",
        onChange: this.onChangeValue,
        value: this.state.formValues.lastname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "Gender",
        nameCols: 3,
        elementCols: 9,
        elementClassName: "pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "gender",
        name: "gender",
        onChange: this.onChangeValue,
        value: this.state.formValues.gender,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "male",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Male"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "female",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Female"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "undisclosed",
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Undisclosed"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "Dial Code",
        nameCols: 3,
        elementCols: 9,
        elementClassName: "pl-4 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "dial_code",
        name: "dial_code",
        onChange: this.onChangeValue,
        value: this.state.formValues.dial_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Select Code"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "+91",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "+91"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        nameCols: 3,
        elementCols: 9,
        name: "Mobile Number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "input-text",
        placeholder: "Mobile Number",
        name: "mobile_number",
        onChange: this.onChangeValue,
        style: {
          backgroundColor: "#f6f6f6"
        },
        value: this.state.formValues.mobile_number,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "College",
        nameCols: 3,
        elementCols: 9,
        elementClassName: "pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "college",
        name: "collegeId",
        onChange: this.onChangeValue,
        value: this.state.formValues.collegeId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, console.log(this.state.formValues.colleges), this.state.formValues.colleges.map(function (college) {
        console.log(college);
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: college.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, college.name);
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "Branch / Course",
        nameCols: 3,
        elementCols: 9,
        elementClassName: "pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "branch_courses",
        name: "branchId",
        onChange: this.onChangeValue,
        value: this.state.formValues.branchId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, this.state.formValues.branches.map(function (branch) {
        console.log(branch);
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: branch.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, branch.name);
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "Graduation Year",
        nameCols: 3,
        elementCols: 9,
        elementClassName: "pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "grad_year",
        name: "gradYear",
        onChange: this.onChangeValue,
        value: this.state.formValues.gradYear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        selected: true,
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "Select Graduation Year"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "2019",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "List Of Years"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FieldWithElement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "Email",
        nameCols: 3,
        elementCols: 9,
        elementClassName: "pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "input-text icon mail-bg",
        placeholder: "Email Address",
        name: "email",
        onChange: this.onChangeValue,
        value: this.state.formValues.email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        id: "search",
        className: "button-solid ml-4 mb-2 mt-4 pl-5 pr-5",
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "Create User"))));
    }
  }]);

  return AddUser;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddUser);

/***/ })

})
//# sourceMappingURL=index.js.70257e13d43d2747f641.hot-update.js.map