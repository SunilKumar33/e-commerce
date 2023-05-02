import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  validateCVV,
  validateCardNumber,
  validateMonth,
  validateName,
  validateUPI,
  validateYear,
} from "../helper";
import { useDispatch } from "react-redux";
import {
  setCartData,
  setCategoryData,
  setProductId,
} from "../../features/Data/dataSlice";
import OrderDetails from "./OrderDetails";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Payment = ({ amountToPay, setStepperSection }) => {
  const [paymentMode, setPaymentMode] = useState("card");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderPlaced = () => {
    toast.success("Order Placed Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(setCartData([]));
    dispatch(setCategoryData(""));
    dispatch(setProductId(""));
    navigate("/");
  };

  return (
    <div className="product_details_section">
      <div>
        <button
          className="back_button"
          onClick={() => {
            setStepperSection("Address");
          }}
        >
          <ArrowBackRoundedIcon />
          Back
        </button>
      </div>

      <div className="row">
        <div className="col-md-9">
          <div>
            <h3>Select Payment Mode</h3>
            <div>
              <div className="vertical_tabs">
                <div className="vertical_tabs_list">
                  <div
                    className={
                      paymentMode === "card"
                        ? "vertical_tab vertical_tab_selected"
                        : "vertical_tab"
                    }
                    onClick={() => {
                      setPaymentMode("card");
                    }}
                  >
                    <div className="vertical_tab_text">Credit/ Debit Cards</div>
                  </div>
                  <div
                    className={
                      paymentMode === "netBanking"
                        ? "vertical_tab vertical_tab_selected"
                        : "vertical_tab"
                    }
                    onClick={() => {
                      setPaymentMode("netBanking");
                    }}
                  >
                    <div className="vertical_tab_text">Net Banking</div>
                  </div>
                  <div
                    className={
                      paymentMode === "wallet"
                        ? "vertical_tab vertical_tab_selected"
                        : "vertical_tab"
                    }
                    onClick={() => {
                      setPaymentMode("wallet");
                    }}
                  >
                    <div className="vertical_tab_text">Wallet</div>
                  </div>
                  <div
                    className={
                      paymentMode === "upi"
                        ? "vertical_tab vertical_tab_selected"
                        : "vertical_tab"
                    }
                    onClick={() => {
                      setPaymentMode("upi");
                    }}
                  >
                    <div className="vertical_tab_text">UPI</div>
                  </div>
                  <div
                    className={
                      paymentMode === "cod"
                        ? "vertical_tab vertical_tab_selected"
                        : "vertical_tab"
                    }
                    onClick={() => {
                      setPaymentMode("cod");
                    }}
                  >
                    <div className="vertical_tab_text">Cash on Delivery</div>
                  </div>
                </div>
                <div className="tab_content_container">
                  <div>
                    {paymentMode === "card" ? (
                      <div>
                        <div className="card_container">
                          <span className="pe_heading">Add New Card</span>
                          <div>
                            <Formik
                              initialValues={{
                                name: "",
                                card_number: "",
                                card_month: "",
                                card_year: "",
                                card_cvv: "",
                              }}
                              onSubmit={(values) => {
                                console.log("values", values);
                                orderPlaced();
                              }}
                            >
                              {({ errors, touched }) => (
                                <Form>
                                  <div>
                                    <label className="card_form_label">
                                      Card Number
                                    </label>
                                    <br />
                                    <Field
                                      className="upi_input"
                                      type="number"
                                      placeholder="Enter Crad Number"
                                      name="card_number"
                                      validate={validateCardNumber}
                                      onKeyDown={(e) =>
                                        ["e", "E", "+", "-"].includes(e.key) &&
                                        e.preventDefault()
                                      }
                                      onWheel={(e) => e.target.blur()}
                                      min="0"
                                    />
                                    {errors.card_number &&
                                      touched.card_number && (
                                        <div className="error">
                                          {errors.card_number}
                                        </div>
                                      )}
                                  </div>

                                  <div>
                                    <label className="card_form_label">
                                      Name on Card
                                    </label>
                                    <br />
                                    <Field
                                      className="upi_input"
                                      type="text"
                                      placeholder="Enter Your Name"
                                      name="name"
                                      validate={validateName}
                                    />
                                    {errors.name && touched.name && (
                                      <div className="error">{errors.name}</div>
                                    )}
                                  </div>

                                  <div className="d-flex">
                                    <div className="d-flex">
                                      <div>
                                        <label className="card_form_label">
                                          Expiration Date
                                        </label>
                                        <br />
                                        <Field
                                          className="upi_input"
                                          type="number"
                                          placeholder="Enter Month"
                                          name="card_month"
                                          validate={validateMonth}
                                          onKeyDown={(e) =>
                                            ["e", "E", "+", "-"].includes(
                                              e.key
                                            ) && e.preventDefault()
                                          }
                                          onWheel={(e) => e.target.blur()}
                                          min="0"
                                        />
                                        {errors.card_month &&
                                          touched.card_month && (
                                            <div className="error">
                                              {errors.card_month}
                                            </div>
                                          )}
                                      </div>

                                      <div className="align-self-end">
                                        <br />
                                        <Field
                                          className="upi_input"
                                          type="number"
                                          placeholder="Enter Year"
                                          name="card_year"
                                          validate={validateYear}
                                          onKeyDown={(e) =>
                                            ["e", "E", "+", "-"].includes(
                                              e.key
                                            ) && e.preventDefault()
                                          }
                                          onWheel={(e) => e.target.blur()}
                                          min="0"
                                        />
                                        {errors.card_year &&
                                          touched.card_year && (
                                            <div className="error">
                                              {errors.card_year}
                                            </div>
                                          )}
                                      </div>
                                    </div>

                                    <div>
                                      <label className="card_form_label">
                                        CVV
                                      </label>
                                      <br />
                                      <Field
                                        className="upi_input"
                                        type="number"
                                        name="card_cvv"
                                        validate={validateCVV}
                                        onKeyDown={(e) =>
                                          ["e", "E", "+", "-"].includes(
                                            e.key
                                          ) && e.preventDefault()
                                        }
                                        onWheel={(e) => e.target.blur()}
                                        min="0"
                                      />
                                      {errors.card_cvv && touched.card_cvv && (
                                        <div className="error">
                                          {errors.card_cvv}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className="cod_container_action">
                                    <button
                                      type="submit"
                                      className="btn_place_order"
                                    >
                                      PLACE ORDER
                                    </button>
                                    <div className="tnc_text">
                                      By placing this order, you agree to Sk's
                                      T&amp;C
                                    </div>
                                  </div>
                                </Form>
                              )}
                            </Formik>
                          </div>
                        </div>
                      </div>
                    ) : paymentMode === "netBanking" ? (
                      <div>
                        <div className="cod_container">
                          <span className="pe_heading">Net Banking</span>
                          <div className="cod_custom_message">
                            Note: Will Be Implemented Soon
                          </div>
                          <div className="cod_container_action">
                            <button
                              onClick={() => {
                                orderPlaced();
                              }}
                              type="button"
                              className="btn_place_order"
                            >
                              PLACE ORDER
                            </button>
                            <div className="tnc_text">
                              By placing this order, you agree to Sk's T&amp;C
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : paymentMode === "wallet" ? (
                      <div>
                        <div className="cod_container">
                          <span className="pe_heading">Wallet</span>
                          <div className="cod_custom_message">
                            Note: Will Be Implemented Soon
                          </div>
                          <div className="cod_container_action">
                            <button
                              onClick={() => {
                                orderPlaced();
                              }}
                              type="button"
                              className="btn_place_order"
                            >
                              PLACE ORDER
                            </button>
                            <div className="tnc_text">
                              By placing this order, you agree to Sk's T&amp;C
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : paymentMode === "upi" ? (
                      <div className="upi_form">
                        <div className="upi_information">
                          <Formik
                            initialValues={{ upiId: "" }}
                            onSubmit={(values) => {
                              console.log("values", values);
                              orderPlaced();
                            }}
                          >
                            {({ errors, touched }) => (
                              <Form>
                                <span className="pe_heading">
                                  Enter your UPI ID
                                </span>
                                <div className="upi_information_text1">
                                  Pay instantly from your bank using your UPI
                                  ID.
                                </div>

                                <div>
                                  <Field
                                    className="upi_input"
                                    type="text"
                                    placeholder="1234567890@"
                                    name="upiId"
                                    validate={validateUPI}
                                  />
                                  {errors.upiId && touched.upiId && (
                                    <div className="error">{errors.upiId}</div>
                                  )}
                                </div>

                                <div>
                                  <div>
                                    <button
                                      // onClick={() => {
                                      //   orderPlaced();
                                      // }}
                                      type="submit"
                                      className="btn_place_order"
                                    >
                                      PLACE ORDER
                                    </button>
                                  </div>
                                  <div className="tnc_text">
                                    By placing this order, you agree to Sk's
                                    T&amp;C
                                  </div>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    ) : paymentMode === "cod" ? (
                      <div>
                        <div className="cod_container">
                          <span className="pe_heading">Cash on Delivery</span>
                          <div className="cod_custom_message">
                            For safe, contactless and hassle free delivery, pay
                            using card/wallet/netbanking
                          </div>
                          <div className="cod_container_action">
                            <button
                              onClick={() => {
                                orderPlaced();
                              }}
                              type="button"
                              className="btn_place_order"
                            >
                              PLACE ORDER
                            </button>
                            <div className="tnc_text">
                              By placing this order, you agree to Sk's T&amp;C
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <OrderDetails amountToPay={amountToPay} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
