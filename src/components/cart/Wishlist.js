import React, { useState, useEffect } from "react";
import "./cart.css";
import NavBar from "../navbar/NavBar";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import {
  selectWishListData,
  setWishListData,
  selectUserLogged,
  setCartData,
  selectCartData,
} from "../../features/Data/dataSlice";
import Footer from "../home/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Wishlist = () => {
  const dispatch = useDispatch();
  const userCheck = useSelector(selectUserLogged);
  const [productData, setProductData] = useState(
    useSelector(selectWishListData)
  );
  const [bagData, setBagData] = useState(useSelector(selectCartData));

  // to remove from wishlist
  const removeWishlist = (values) => {
    let arr = [];
    arr = productData.filter((obj) => obj.id !== values.id);
    setProductData(arr);
    dispatch(setWishListData(arr));
    toast.success("Item Removed From Wishlist", {
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

  // to add to cart
  const addToBag = (values) => {
    if (!userCheck) {
      toast.error("Please Log In to add Items into Cart", {
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
      const existingIds = bagData.map((addedPerson) => addedPerson.id);

      // to remove from wishlist
      let arr = [];
      arr = productData.filter((obj) => obj.id !== values.id);
      setProductData(arr);
      dispatch(setWishListData(arr));

      // to add to cart
      if (!existingIds.includes(values.id)) {
        const newObj = Object.assign({ qty: 1 }, values);
        setBagData((prevState) => [...prevState, newObj]);
        toast.success("Item Added to Cart", {
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
        toast.error("Item Exists In Cart", {
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
    }
  };

  useEffect(() => {
    dispatch(setCartData(bagData));
  }, [bagData]);

  return (
    <>
      <NavBar />

      <div className="product_section">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Wishlist
            </li>
          </ol>
        </nav>
      </div>

      {userCheck === true ? (
        <div
          className="product_details_section"
          style={{ borderBottom: "1px solid #ececec" }}
        >
          <p className="category_txt">My Wishlist</p>

          <div className="row">
            {productData.length > 0 ? (
              productData.map((data, index) => {
                let productPrice = Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(data.price);
                return (
                  <div className="pb-4 col-md-3 col-sm-6 col-xs-12" key={index}>
                    <div className="card wishlist_card">
                      <div>
                        <div
                          className="p-3"
                          style={{
                            width: "200px",
                            margin: "auto",
                          }}
                        >
                          <div
                            className="wishlist_delete"
                            onClick={() => {
                              removeWishlist(data);
                            }}
                          >
                            <DeleteRoundedIcon style={{ fontSize: "20px" }} />
                          </div>

                          <img
                            src={`${data.image}`}
                            className="w-100"
                            alt="wishlistImages"
                            style={{ height: "280px" }}
                          />

                          <div
                            className="wishlist_bag"
                            onClick={() => {
                              addToBag(data);
                            }}
                          >
                            <ShoppingBagRoundedIcon
                              style={{ fontSize: "20px" }}
                            />
                          </div>
                        </div>

                        <div className="p-3 wishlist_content">
                          <p className="card-title wishlist_title">
                            {data.title}
                          </p>

                          <p className="product_price m-0">{productPrice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="d-flex align-items-center w-100 py-5">
                <h3>No Items in Wishlist.. Add Items to wishlist..</h3>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className="wishlist_container"
          style={{ borderBottom: "1px solid #ececec" }}
        >
          <div className="wishlistLogin_heading">PLEASE LOG IN</div>
          <div className="wishlistLogin_info">
            Login to view items in your wishlist.
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

export default Wishlist;
