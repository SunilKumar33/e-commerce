import React from "react";
import logo from "../../Assests/images/logo.jpg";
import { Formik, Form, Field } from "formik";
import { validateNumber, validatePassword } from "../helper";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../../features/Data/dataSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="login_bg">
      <div className="login">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 login_card">
              <Formik
                initialValues={{
                  number: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  if (
                    values.number === "9900487973" &&
                    values.password === "12345"
                  ) {
                    dispatch(setUserLogged(true));
                    toast.success("LogIn Successfully", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                    navigate("/");
                  } else {
                    toast.error("LogIn Failed", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div>
                      <div className="d-flex justify-content-center">
                        <img src={logo} width="50%" alt="logo" />
                      </div>
                      <div className="text-dark text-center pb-4">
                        <span className="login_txt">SK Login</span>
                      </div>
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
                      <div>
                        <label className="input_label">Password *</label>
                        <br />
                        <Field
                          className="input_field"
                          type="password"
                          placeholder="Enter Password"
                          name="password"
                          validate={validatePassword}
                        />
                        {errors.password && touched.password && (
                          <div className="error">{errors.password}</div>
                        )}
                      </div>
                      <div>
                        <button
                          className="p-2 btn_submit_address"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
