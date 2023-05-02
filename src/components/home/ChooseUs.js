import React from "react";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import ShieldSharpIcon from "@mui/icons-material/ShieldSharp";

const ChooseUs = () => {
  return (
    <section id={"aboutus"} className="product_details_section">
      <div>
        <div className="choose_us_txt">
          <span>Why Choose Us</span>
        </div>

        <div className="mt-5 row">
          <div className="pb-2 col-md-3 col-sm-6 col-xs-12">
            <div className="choose_us_card">
              <div className="d-flex justify-content-center mb-3">
                <LanguageRoundedIcon className="choose_us_icon" />
              </div>
              <p className="choose_us_card_head_txt">Worldwide Shipping</p>
              <p className="m-0 choose_us_card_sub_txt">
                We offer worldwide shipping to make our products accessible to
                customers all over the world.
              </p>
            </div>
          </div>
          <div className="pb-2 col-md-3 col-sm-6 col-xs-12">
            <div className="choose_us_card">
              <div className="d-flex justify-content-center mb-3">
                <VerifiedRoundedIcon className="choose_us_icon" />
              </div>
              <p className="choose_us_card_head_txt">Best Quality</p>
              <p className="m-0 choose_us_card_sub_txt">
                We believe in providing our customers with only the best quality
                products.
              </p>
            </div>
          </div>
          <div className="pb-2 col-md-3 col-sm-6 col-xs-12">
            <div className="choose_us_card">
              <div className="d-flex justify-content-center mb-3">
                <PercentRoundedIcon className="choose_us_icon" />
              </div>
              <p className="choose_us_card_head_txt">Best Offers</p>
              <p className="m-0 choose_us_card_sub_txt">
                We pride ourselves on offering the best deals and discounts to
                our customers.
              </p>
            </div>
          </div>
          <div className="pb-2 col-md-3 col-sm-6 col-xs-12">
            <div className="choose_us_card">
              <div className="d-flex justify-content-center mb-3">
                <ShieldSharpIcon className="choose_us_icon" />
              </div>
              <p className="choose_us_card_head_txt">Secure Payments</p>
              <p className="m-0 choose_us_card_sub_txt">
                We offer a range of secure payment options to ensure that your
                transactions are safe and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
