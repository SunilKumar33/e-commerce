import React from "react";
import { Formik, Form, Field } from "formik";
import { validateName, validateEmail, validateReview } from "../helper";

const Review = () => {
  return (
    <div>
      <p className="category_txt">Write a Review</p>

      <Formik
        initialValues={{ name: "", email: "", review: "" }}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className="row">
              <div className="col-6">
                <div>
                  <label className="input_label">Your Name *</label>
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

              <div className="col-6">
                <div>
                  <label className="input_label">Your Review *</label>
                  <br />
                  <Field
                    as="textarea"
                    className="input_field"
                    type="text"
                    placeholder="Enter Your Comments"
                    name="review"
                    rows="6"
                    cols="50"
                    validate={validateReview}
                  />
                  {errors.review && touched.review && (
                    <div className="error">{errors.review}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex">
              <span className="align-self-center">Your Rating</span>
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
            </div>

            <div>
              <button className="btn_review" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Review;
