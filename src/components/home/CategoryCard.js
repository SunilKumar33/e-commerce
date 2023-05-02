import React from "react";
import electric from "../../Assests/images/electronics.png";
import jewellery from "../../Assests/images/jewellery.jpg";
import clothes from "../../Assests/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { setCategoryData } from "../../features/Data/dataSlice";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="card category_card">
      <div className="card-body">
        <p className="card-title">{data?.toUpperCase()}</p>
        {data === "electronics" ? (
          <div className="d-flex" style={{ gap: "20px" }}>
            <div>
              <p className="card-text">
                Electronic device means an item that operates by controlling the
                flow of electrons or other electrically charged particles in
                circuits, using interconnections such as resistors, inductors,
                capacitors, diodes, switches, transistors, or integrated
                circuits.
              </p>

              <button
                onClick={() => {
                  dispatch(setCategoryData(data));
                  navigate("/product");
                }}
                className="btn_view_all"
              >
                View All
              </button>
            </div>

            <img src={electric} className="card-img-top w-50" alt="..." />
          </div>
        ) : data === "jewelery" ? (
          <div className="d-flex" style={{ gap: "20px" }}>
            <div>
              <p className="card-text">
                Jewelry is a form of art for self and creative expression. Then,
                there are some people who use jewelry as part of their tradition
                and culture. Jewelry has no other purpose than to look
                attractive. It also symbolizes wealth, power, and status.
              </p>

              <button
                onClick={() => {
                  dispatch(setCategoryData(data));
                  navigate("/product");
                }}
                className="btn_view_all"
              >
                View All
              </button>
            </div>

            <img src={jewellery} className="card-img-top w-50" alt="..." />
          </div>
        ) : data === "men's clothing" ? (
          <div className="d-flex" style={{ gap: "20px" }}>
            <div>
              <p className="card-text">
                Clothing is a form of self-expression. People from different
                cultures wear different clothing, and have different beliefs and
                customs about what type of clothing should be worn. For many
                people, clothing is a status symbol. It helps people project an
                image.
              </p>

              <button
                onClick={() => {
                  dispatch(setCategoryData(data));
                  navigate("/product");
                }}
                className="btn_view_all"
              >
                View All
              </button>
            </div>

            <img src={clothes} className="card-img-top w-50" alt="..." />
          </div>
        ) : (
          <div className="d-flex" style={{ gap: "20px" }}>
            <div>
              <p className="card-text">
                Clothing is a form of self-expression. People from different
                cultures wear different clothing, and have different beliefs and
                customs about what type of clothing should be worn. For many
                people, clothing is a status symbol. It helps people project an
                image.
              </p>

              <button
                onClick={() => {
                  dispatch(setCategoryData(data));
                  navigate("/product");
                }}
                className="btn_view_all"
              >
                View All
              </button>
            </div>

            <img src={clothes} className="card-img-top w-50" alt="..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
