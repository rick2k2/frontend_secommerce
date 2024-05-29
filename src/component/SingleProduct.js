import React from "react";
import m1 from "./assests/mens/m1.jpg";
import StarIcon from "@mui/icons-material/Star";
import "./component style/Singleproduct.css";
import { Link } from "react-router-dom";

export default function SingleProduct() {
  return (
    <div className="single_product_container">
      <div className="sp_upper">
        <span className="link_url_sp">{`HOME > SHOP > MEN > MEN BLACK SOLID ZIPPERED JACKET`}</span>
      </div>
      <div className="sp_lower">
        <div className="sp_lower_left">
          <img src={m1} alt="product_img" />
          <img src={m1} alt="product_img" />
          <img src={m1} alt="product_img" />
          <img src={m1} alt="product_img" />
        </div>
        <div className="sp_lower_middle">
          <img src={m1} alt="product_img" />
        </div>
        <div className="sp_lower_right">
          <h2>Men Black Solid Zippered Full Zip Slim Fit Bomber Jacket</h2>
          <div className="star_align">
            <StarIcon className="star_icon" />
            <StarIcon className="star_icon" />
            <StarIcon className="star_icon" />
            <StarIcon className="star_icon" />
            (122)
          </div>
          <p className="new_price">
            <span className="old_price_single">$120</span>$82
          </p>
          <p className="single_product_description">
            A jacket is generally lighter, tighter-fitting, and less insulating
            than a coat, which is outerwear. Some jackets are fashionable, while
            others serve as protective clothing
          </p>
          <h3>Select Size:</h3>
          <div className="size_container">
            <p>S</p>
            <p>L</p>
            <p>M</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
          <Link to="/cart" className="add_to_cart_btn">
            {" "}
            ADD TO CART
          </Link>
          <span className="sinlg_item_text_one_line">
            <span className="tag_name">Category:</span> MEN,T-SHIRT,JACKET
          </span>
          <span className="sinlg_item_text_one_line">
            <span className="tag_name">Tags:</span> Modern,Outer
          </span>
        </div>
      </div>
    </div>
  );
}
