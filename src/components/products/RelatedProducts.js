import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserLogged,
  selectCategoryData,
  setProductId,
  selectWishListData,
  setWishListData,
} from "../../features/Data/dataSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const RelatedProducts = () => {
  const userCheck = useSelector(selectUserLogged);
  const category = useSelector(selectCategoryData);
  const [wishData, setWishData] = useState(useSelector(selectWishListData));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProductData(res.data);
      });
  }, [category]);

  // to add items into wishlist
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
    <div className="product_section">
      <p className="category_txt">Related Productes</p>
      <div className="row">
        {productData.length > 0 ? (
          productData.slice(0, 4).map((data, index) => {
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
                    navigate("/productdetails");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
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
                          <div className="d-flex mb-3" style={{ gap: "10px" }}>
                            <div className="rating">
                              {data.rating.rate}{" "}
                              <StarIcon style={{ fontSize: "19px" }} />
                            </div>
                            <span className="review_count">
                              ({data.rating.count})
                            </span>
                          </div>
                          <p className="product_price m-0">{productPrice}</p>
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
  );
};

export default RelatedProducts;
