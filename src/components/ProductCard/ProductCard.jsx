import React from "react";
import OfferComponent from "../OfferComponent/OfferComponent";
import { FaStar } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";

export default function ProductCard({ title, productName, productOldPrice, productPrice, imageURL, rating, discount, icons }) {
    return (
        <>
            <div className="product-card">
                <div className="product-card-image">
                    {rating && (
                        <div className="product-card-rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    )}
                    <img src={imageURL} alt="" />
                    {icons && (
                        <div className="product-card-image-icons">
                            <div className="single-icon">
                                <AiOutlineShoppingCart />
                            </div>
                            <div className="single-icon">
                                <MdOutlineRemoveRedEye />
                            </div>
                            <div className="single-icon">
                                <IoHeartOutline />
                            </div>
                        </div>
                    )}
                </div>
                <div className="product-card-content">
                    {title && <span className="product-card-content-title">{title}</span>}
                    {productName && <strong>{productName}</strong>}
                    <div className="product-card-content-price">
                        {productOldPrice && <del>{productOldPrice}$</del>}
                        {productPrice && <p className="product-card-content-price-current">{productPrice}$</p>}
                    </div>
                </div>
                {discount && <OfferComponent discount={discount} />}
            </div>
        </>
    );
}
