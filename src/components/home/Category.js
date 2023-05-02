import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <section className="category_section">
      <div>
        <p className="category_txt">Popular Categories</p>
        <div className="card-group" style={{ gap: "20px" }}>
          {categories.length > 0 ? (
            categories.map((data, index) => {
              return <CategoryCard key={index} data={data} />;
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
    </section>
  );
};

export default Category;
