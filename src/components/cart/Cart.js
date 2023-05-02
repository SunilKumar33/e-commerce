import React, { useState, useEffect } from "react";
import CartNavBar from "./CartNavBar";
import "./cart.css";
import Bag from "./Bag";
import Address from "./Address";
import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {
  selectUserLogged,
  selectCartData,
  setCartData,
  selectWishListData,
  setWishListData,
} from "../../features/Data/dataSlice";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import OrderDetails from "./OrderDetails";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Cart = () => {
  const dispatch = useDispatch();
  const userCheck = useSelector(selectUserLogged);
  const [stepperSection, setStepperSection] = useState("Bag");

  const [wishData, setWishData] = useState(useSelector(selectWishListData));
  const [productDetails, setProductDetails] = useState(
    useSelector(selectCartData)
  );

  // to remove from cart
  const removeCart = (values) => {
    let arr = [];
    arr = productDetails.filter((obj) => obj.id !== values.id);
    setProductDetails(arr);
    dispatch(setCartData(arr));
    toast.success("Item Removed From Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // to add to wishlist
  const addWishlist = (values) => {
    const existingIds = wishData.map((addedPerson) => addedPerson.id);

    // to remove from cart
    let arr = [];
    arr = productDetails.filter((obj) => obj.id !== values.id);
    setProductDetails(arr);
    dispatch(setCartData(arr));

    // to add to wishlist
    if (!existingIds.includes(values.id)) {
      setWishData((prevState) => [...prevState, values]);
      toast.success("Item Added to Wishlist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Item Exists In Wishlist", {
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
  };

  useEffect(() => {
    dispatch(setWishListData(wishData));
  }, [wishData]);

  const [bagTotal, setBagTotal] = useState([]);

  const newArray = [];

  console.log("bagTotal", bagTotal);
  console.log("newArray", newArray);

  return (
    <>
      <CartNavBar />

      <div className="stepper_parent">
        <div className="stepper-wrapper">
          <div
            className={
              stepperSection === "Bag"
                ? "stepper-item stepper-active"
                : stepperSection === "Address" || stepperSection === "Payment"
                ? "stepper-item stepper-completed"
                : "stepper-item"
            }
          >
            <div className="step-counter"></div>
            <div className="step-name">Bag</div>
          </div>
          <div
            className={
              stepperSection === "Address"
                ? "stepper-item stepper-active"
                : stepperSection === "Payment"
                ? "stepper-item stepper-completed"
                : "stepper-item"
            }
          >
            <div className="step-counter"></div>
            <div className="step-name">Address</div>
          </div>
          <div
            className={
              stepperSection === "Payment"
                ? "stepper-item stepper-active"
                : "stepper-item"
            }
          >
            <div className="step-counter"></div>
            <div className="step-name">Payment</div>
          </div>
        </div>
      </div>

      {userCheck === true ? (
        <div>
          {stepperSection === "Bag" ? (
            <div className="product_details_section">
              <div className="row">
                <div className="col-md-9">
                  <div className="cart_header">
                    <div className="d-flex justify-content-between">
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <span className="my_bag_txt">My Bag</span>
                        <span className="count_txt">
                          ({productDetails.length})
                        </span>
                      </div>
                      <div>
                        <Link className="add_wishlist_txt" to={"/wishlist"}>
                          <AddRoundedIcon style={{ fontSize: "18px" }} />
                          <span>Add From Wishlist</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product_cd">
                      {productDetails.length > 0 ? (
                        productDetails.map((data, index) => {
                          return (
                            <div key={index}>
                              <Bag
                                data={data}
                                addWishlist={addWishlist}
                                removeCart={removeCart}
                                bagTotal={bagTotal}
                                setBagTotal={setBagTotal}
                              />
                            </div>
                          );
                        })
                      ) : (
                        <div className="d-flex align-items-center w-100 py-5">
                          <strong>Loading...</strong>
                          <div
                            className="spinner-border ms-auto"
                            role="status"
                            aria-hidden="true"
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <OrderDetails
                    stepperSection={stepperSection}
                    setStepperSection={setStepperSection}
                  />
                </div>
              </div>
            </div>
          ) : stepperSection === "Address" ? (
            <div>
              <Address
                stepperSection={stepperSection}
                setStepperSection={setStepperSection}
              />
            </div>
          ) : stepperSection === "Payment" ? (
            <div>
              <Payment setStepperSection={setStepperSection} />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div
          className="wishlist_container"
          style={{ borderBottom: "1px solid #ececec" }}
        >
          <div
            className="wishlistLogin_heading"
            style={{ marginBottom: "15px" }}
          >
            PLEASE LOG IN
          </div>
          <div className="wishlistLogin_info" style={{ marginBottom: "15px" }}>
            Login to view items in your Cart.
          </div>

          <div className="wishlistLogin_info" style={{ marginBottom: "15px" }}>
            <ShoppingBasketSharpIcon style={{ fontSize: "57px" }} />
          </div>

          <div className="d-flex justify-content-center">
            <Link to={"/login"} className="wishlistLogin_button">
              LOGIN
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
