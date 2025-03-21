import React from "react";
import FilterTabs from "../FilterTabs/FilterTabs";
import ProductCard from "../ProductCard/ProductCard";

export default function BestDeals() {
    const products = [{ id: 1, productName: "", imageURL: "", }];
    return (
        <>
            <section className=" best-deals-section">
                <div className="container best-deals-container">
                    <div className="best-deals-banner">
                        <img src="./src/assets/images/feature_banner.png" alt="" />
                    </div>
                    <div className="best-deals-products">
                        <FilterTabs title="best deals" />
                        <div className="best-deals-products-container">
                            <ProductCard
                                productOldPrice={"15.00"}
                                productPrice={"12.00"}
                                rating
                                icons
                                imageURL={"./src/assets/images/products/portable-speaker.jpg"}
                                productName={"portable speaker"}
                            />

                            <ProductCard productPrice={"20.00"} rating={""} icons imageURL={"./src/assets/images/products/LED-Projector.jpg"} productName={"LED projector"} />

                            <ProductCard
                                productOldPrice={"670.00"}
                                productPrice={"569.00"}
                                rating={""}
                                icons
                                imageURL={"./src/assets/images/products/LED-Television.png"}
                                productName={"LED Television"}
                            />

                            <ProductCard productOldPrice={"640.00"} productPrice={"540.00"} rating={""} icons imageURL={"./src/assets/images/products/3D-VR-Glass.jpg"} productName={"3D Glass"} />

                            <ProductCard
                                productOldPrice={"69.00"}
                                productPrice={"42.00"}
                                rating={""}
                                icons
                                imageURL={"./src/assets/images/products/pink-gaming-headphone.jpg"}
                                productName={"gamming headphone"}
                            />
                            <ProductCard
                                productOldPrice={"640.00"}
                                productPrice={"540.00"}
                                rating={""}
                                icons
                                imageURL={"./src/assets/images/products/touchscreen-laptop.jpg"}
                                productName={"touchscreen laptop"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
