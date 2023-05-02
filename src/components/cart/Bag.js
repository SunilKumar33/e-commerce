import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Bag = ({ data, removeCart, addWishlist, bagTotal, setBagTotal }) => {
  const [quantityValues, setQuantityValues] = useState(data.qty);
  let totalCost = data.price * quantityValues;

  let arr = [];
  console.log("arr", arr.push(totalCost));
  // setWishData((prevState) => [...prevState, productDetails]);
  console.log("totalCost", totalCost);
  // setBagTotal((prevState) => [...prevState, totalCost]);

  return (
    <div className="card_section row">
      <div className="product_img col-4 col-lg-2">
        <img src={data.image} alt="productImage" />
      </div>
      <div className="product_details col-lg-10 col-8">
        <div className="product_name">{data.title}</div>
        <div className="product_quantity">
          <p className="qty_txt">Quantity</p>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: "15px" }}
          >
            <div
              className={
                quantityValues <= 1 ? "values_disable" : "increment_values"
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

        <div className="product_price_info">
          <div className="product_price_txt">
            <span>
              {Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(totalCost)}
            </span>
          </div>
          <div className="d-flex">
            <div
              className="me-2 add_wishlist_txt"
              onClick={() => {
                removeCart(data);
              }}
            >
              <span>Delete</span>
            </div>
            <div
              className="ms-2 add_wishlist_txt"
              onClick={() => {
                addWishlist(data);
              }}
            >
              <span>
                <FavoriteIcon />
                Move to Wishlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
