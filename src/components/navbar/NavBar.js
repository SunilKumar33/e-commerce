import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../Assests/images/logo.jpg";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserLogged,
  setCategoryData,
  setProductId,
  setWishListData,
  setUserLogged,
  setCartData,
} from "../../features/Data/dataSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const NavBar = () => {
  const userCheck = useSelector(selectUserLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);

  // logout functionaluty
  const logOut = () => {
    dispatch(setCategoryData(""));
    dispatch(setProductId(""));
    dispatch(setWishListData([]));
    dispatch(setUserLogged(false));
    dispatch(setCartData([]));
    toast.success("User Logged Out Successfully", {
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
  };

  return (
    <div>
      <nav
        className="navbar fixed-top bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid" style={{ padding: "0px 5% 0px 5%" }}>
          <Link to={"/"} className="navbar-brand" style={{ width: "35%" }}>
            <img src={logo} alt="logo" width="110" height="53" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <Link to={"/allproducts"} className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contactus">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex" style={{ gap: "10px" }}>
              <Link to={"/wishlist"} className="wishlist">
                <FavoriteIcon />
              </Link>
              <Link to={"/cart"} className="cart">
                <ShoppingCartIcon />
              </Link>
              <div
                onClick={() => {
                  setOpenProfile(!openProfile);
                }}
                className="profile profile_open"
              >
                <PersonIcon />

                {openProfile && (
                  <div className="profile_card">
                    {!userCheck ? (
                      <button
                        className="sign_in"
                        onClick={() => navigate("/login")}
                      >
                        Sign In
                      </button>
                    ) : (
                      <button
                        className="sign_in"
                        onClick={() => {
                          logOut();
                        }}
                      >
                        Logout
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
