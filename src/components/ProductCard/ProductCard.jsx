import React from "react";
import OfferComponent from "../OfferComponent/OfferComponent";

export default function ProductCard({ title, productName, productOldPrice, productPrice, imageURL, rating, discount }) {
    return (
        <>
            <div className="product-card">
                {rating && (
                    <div className="product-card-rating">
                        <div className="product-card-rating-icon"></div>
                        <div className="product-card-rating-icon"></div>
                        <div className="product-card-rating-icon"></div>
                        <div className="product-card-rating-icon"></div>
                        <div className="product-card-rating-icon"></div>
                    </div>
                )}
                <div className="product-card-image">
                    <img src={imageURL} alt="" />
                    {/* <div className="product-card-image-icons">
                  <div className="test-icon"></div>
                  <div className="test-icon"></div>
                  <div className="test-icon"></div>
                </div> */}
                </div>
                <div className="product-card-content">
                    {title && <span className="product-card-content-title">{title}</span>}
                    {productName && <strong>{productName}</strong>}
                    <div className="product-card-content-price">
                        {productOldPrice && <del>{productOldPrice}$</del>}
                        {productPrice && <p className="product-card-content-price-current">{productPrice}$</p>}
                    </div>
                </div>
                {discount && <OfferComponent />}
            </div>
        </>
    );
}
