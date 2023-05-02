import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./product.css";
import NavBar from "../navbar/NavBar";
import StarIcon from "@mui/icons-material/Star";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RelatedProducts from "./RelatedProducts";
import Review from "./Review";
import {
  selectUserLogged,
  selectProductId,
  setWishListData,
  selectWishListData,
  setCartData,
  selectCartData,
} from "../../features/Data/dataSlice";
import Footer from "../home/Footer";
import Promotion from "../home/Promotion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
toast.configure();

const AllProductDetails = () => {
  const userCheck = useSelector(selectUserLogged);
  const productId = useSelector(selectProductId);
  const [wishData, setWishData] = useState(useSelector(selectWishListData));
  const [bagData, setBagData] = useState(useSelector(selectCartData));
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState([]);
  const [quantityValues, setQuantityValues] = useState(
    productDetails.qty === undefined ? 1 : productDetails.qty
  );

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      setProductDetails(res.data);
    });
  }, [productId]);

  // adding items to wishlist
  const addWishlist = () => {
    if (!userCheck) {
      toast.error("Please Log In to add Items into Wishlist", {
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
      const existingIds = wishData.map((addedPerson) => addedPerson.id);

      if (!existingIds.includes(productDetails.id)) {
        setWishData((prevState) => [...prevState, productDetails]);
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
    }
  };

  // to add to cart
  const addToBag = () => {
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

      if (!existingIds.includes(productDetails.id)) {
        productDetails.qty = quantityValues;
        setBagData((prevState) => [...prevState, productDetails]);
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

  useEffect(() => {
    dispatch(setWishListData(wishData));
  }, [wishData]);

  return (
    <>
      <NavBar />

      <div className="product_section">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/allproducts"}>Products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product Details
            </li>
          </ol>
        </nav>
      </div>

      <div className="product_details_section">
        <div className="row">
          <div className="col-12 col-md-6 text-center align-self-center">
            <img
              src={`${productDetails.image}`}
              className="w-50"
              alt="productImages"
            />
          </div>
          <div className="col-12 col-md-6 product_description">
            <div>
              <span className="product_details_title">
                {productDetails.title}
              </span>
              <div className="details_rating_count">
                <span className="product_price">
                  {productDetails.rating?.rate}{" "}
                  <StarIcon style={{ fontSize: "19px", color: "green" }} />
                </span>{" "}
                <span className="review_count">
                  | {productDetails.rating?.count} Ratings
                </span>
              </div>
              <hr className="divider" />
              <p className="details_desc">{productDetails.description}</p>
              <hr className="divider" />

              <div className="row">
                <div className="col-6 col-md-6">
                  <p className="price_txt">Price</p>
                  <p className="details_price">
                    {Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(productDetails.price)}
                  </p>
                </div>
                <div className="col-6 col-md-6">
                  <p className="price_txt">Quantity</p>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "15px" }}
                  >
                    <div
                      className={
                        quantityValues <= 1
                          ? "values_disable"
                          : "increment_values"
                      }
                      onClick={() => {
                        setQuantityValues(quantityValues - 1);
                      }}
                    >
                      <RemoveRoundedIcon />
                    </div>
                    <div className="quantity_value">{quantityValues}</div>
                    <div
                      className="increment_values"
                      onClick={() => {
                        setQuantityValues(quantityValues + 1);
                      }}
                    >
                      <AddRoundedIcon />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex" style={{ gap: "10px" }}>
                <button
                  className="btn_add_to_bag"
                  onClick={() => {
                    addToBag();
                  }}
                >
                  <ShoppingCartIcon />
                  Add to Bag
                </button>
                <button
                  className="btn_wishlist"
                  onClick={() => {
                    addWishlist();
                  }}
                >
                  <FavoriteIcon />
                  Wishlist
                </button>
              </div>
              <hr className="divider" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <RelatedProducts />
      </div>

      <div className="product_details_section">
        <Review />
      </div>

      <Promotion />
      <Footer />
    </>
  );
};

export default AllProductDetails;
