import React from "react";
import { NavLink } from "react-router-dom";

const CategorySlider = ({ categories }) => {
  return (
    <div>
      {categories.map((category, index) => {
        const categoryUrl = `/categories/${category}`;
        return (
          <NavLink className="capitalize" key={index} to={categoryUrl}>
            {category}
          </NavLink>
        );
      })}
    </div>
  );
};

export default CategorySlider;
