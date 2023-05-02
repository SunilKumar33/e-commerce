import React from "react";

const OrderDetails = ({ amountToPay, stepperSection, setStepperSection }) => {
  return (
    <div>
      <div className="order-summary-container">
        <h3 className="card_header">Order Details</h3>
        <div className="price_summary">
          <span className="label">Bag total</span>
          <span className="price_value">
            {Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(amountToPay)}
          </span>
        </div>
        <div className="price_summary">
          <span className="label">Delivery Free</span>
          <div className="d-flex price_value" style={{ gap: "5px" }}>
            <span className="free_txt">Free</span>
            <span className="strike_rate">
              {Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(99)}
            </span>
          </div>
        </div>
        <div className="price_summary">
          <span className="label bold_font">Order Total</span>
          <span className="price_value bold_font">
            {Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(amountToPay)}
          </span>
        </div>
      </div>
      {stepperSection === "Bag" ? (
        <div
          className="btn_nxt"
          onClick={() => {
            setStepperSection("Address");
          }}
        >
          Proceed to shopping
        </div>
      ) : stepperSection === "Address" ? (
        <div
          className="btn_nxt"
          onClick={() => {
            setStepperSection("Payment");
          }}
        >
          Proceed to Payment
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderDetails;
