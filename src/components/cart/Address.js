import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import { Formik, Form, Field } from "formik";
import {
  validateName,
  validateEmail,
  validateNumber,
  validatePinCode,
  validateBuildingName,
  validateLocality,
  validateDistrict,
  validateState,
} from "../helper";
import OrderDetails from "./OrderDetails";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Address = ({ amountToPay, stepperSection, setStepperSection }) => {
  return (
    <div className="product_details_section">
      <div>
        <button
          className="back_button"
          onClick={() => {
            setStepperSection("Bag");
          }}
        >
          <ArrowBackRoundedIcon />
          Back
        </button>
      </div>

      <div className="row">
        <div className="col-md-9">
          <div className="cart_header">
            <div className="d-flex align-items-center" style={{ gap: "10px" }}>
              <div>
                <RoomIcon style={{ fontSize: "50px" }} />
              </div>
              <div>
                <div className="my_bag_txt">Delivery Address</div>
                <div className="count_txt">
                  We will deliver your order to this address
                </div>
              </div>
            </div>
          </div>
          <div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                number: "",
                pincode: "",
                buildingName: "",
                locality: "",
                landmark: "",
                city: "",
                state: "",
              }}
              onSubmit={(values) => {
                console.log("values", values);
              }}
            >
              {({ errors, touched, values }) => (
                <Form>
                  <div className="row">
                    <div className="col-12">
                      <div>
                        <label className="input_label">Name *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="text"
                          placeholder="Enter Your Name"
                          name="name"
                          validate={validateName}
                        />
                        {errors.name && touched.name && (
                          <div className="error">{errors.name}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <label className="input_label">Mobile Number *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="tel"
                          placeholder="Enter Mobile Number"
                          name="number"
                          validate={validateNumber}
                          maxLength={10}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                        {errors.number && touched.number && (
                          <div className="error">{errors.number}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <label className="input_label">Your Email *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                          validate={validateEmail}
                        />
                        {errors.email && touched.email && (
                          <div className="error">{errors.email}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <label className="input_label">Pincode *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="number"
                          placeholder="Enter Pincode"
                          name="pincode"
                          validate={validatePinCode}
                          onKeyDown={(e) =>
                            ["e", "E", "+", "-"].includes(e.key) &&
                            e.preventDefault()
                          }
                          onWheel={(e) => e.target.blur()}
                          min="0"
                        />
                        {errors.pincode && touched.pincode && (
                          <div className="error">{errors.pincode}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <label className="input_label">Building Name *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="text"
                          placeholder="Enter Flat Number / Building Name"
                          name="buildingName"
                          validate={validateBuildingName}
                        />
                        {errors.buildingName && touched.buildingName && (
                          <div className="error">{errors.buildingName}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div>
                        <label className="input_label">Area *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="text"
                          placeholder="Enter Flat Number / Building Name"
                          name="locality"
                          validate={validateLocality}
                        />
                        {errors.locality && touched.locality && (
                          <div className="error">{errors.locality}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div>
                        <label className="input_label">LandMark</label>
                        <br />
                        <Field
                          className="input_field"
                          type="text"
                          placeholder="Enter Landmark"
                          name="landmark"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <label className="input_label">District *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="text"
                          placeholder="Enter District/City"
                          name="city"
                          validate={validateDistrict}
                        />
                        {errors.city && touched.city && (
                          <div className="error">{errors.city}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <label className="input_label">State *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="text"
                          placeholder="Enter State"
                          name="state"
                          validate={validateState}
                        />
                        {errors.state && touched.state && (
                          <div className="error">{errors.state}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <button className="btn_reset_address" type="reset">
                        Reset
                      </button>
                    </div>
                    <div className="col-6">
                      <button className="btn_submit_address" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col-md-3">
          <OrderDetails
            amountToPay={amountToPay}
            stepperSection={stepperSection}
            setStepperSection={setStepperSection}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
