import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import NavBar from "../navbar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserLogged,
  setProductId,
  setWishListData,
  selectWishListData,
  setCategoryData,
} from "../../features/Data/dataSlice";
import Footer from "../home/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const AllProducts = () => {
  const userCheck = useSelector(selectUserLogged);
  const [wishData, setWishData] = useState(useSelector(selectWishListData));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProductData(res.data);
    });
  }, []);

  // to add items in wishlist
  const addWishlist = (values) => {
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
    }
  };

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
            <li className="breadcrumb-item active" aria-current="page">
              All Products
            </li>
          </ol>
        </nav>

        <div>
          <div className="row">
            {productData.length > 0 ? (
              productData.map((data, index) => {
                let productPrice = Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(data.price);
                return (
                  <div className="pb-2 col-md-3 col-sm-6 col-xs-12" key={index}>
                    <div
                      className="card product_card"
                      onClick={() => {
                        dispatch(setProductId(data.id));
                        dispatch(setCategoryData(data.category));
                        navigate("/allproductdetails");
                      }}
                    >
                      <div>
                        <div
                          className="p-3"
                          style={{
                            width: "200px",
                            margin: "auto",
                          }}
                        >
                          <img
                            src={`${data.image}`}
                            className="w-100"
                            alt="productImages"
                            style={{ height: "280px" }}
                          />
                        </div>

                        <div className="p-3 product_content">
                          <p className="card-title prod_title">{data.title}</p>

                          <div className="d-flex justify-content-between">
                            <div>
                              <div
                                className="d-flex mb-3"
                                style={{ gap: "10px" }}
                              >
                                <div className="rating">
                                  {data.rating.rate}{" "}
                                  <StarIcon style={{ fontSize: "19px" }} />
                                </div>
                                <span className="review_count">
                                  ({data.rating.count})
                                </span>
                              </div>
                              <p className="product_price m-0">
                                {productPrice}
                              </p>
                            </div>

                            <div>
                              <div
                                className="wishlist"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addWishlist(data);
                                }}
                              >
                                <FavoriteIcon />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

      <Footer />
    </>
  );
};

export default AllProducts;
