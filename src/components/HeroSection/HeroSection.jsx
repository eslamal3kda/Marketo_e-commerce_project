import React from "react";
import CustomBTN from "../customBTN/CustomBTN";

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className=" hero-section-content">
                    <img className="img-one" src="src/assets/images/headphone_1.png" alt="" />
                    <div className="hero-section-content-title">
                        <h2>Entire Big Collection</h2>
                        <h3>SHOP WISE WITH PRICE COMPARISONS</h3>
                        <div className="hero-section-content-btns">
                            <CustomBTN classes="btn-one" title="view collections" />
                            <CustomBTN classes="btn-two" title="categories" />
                        </div>
                    </div>
                    <img className="img-two" src="src/assets/images/speaker_1.png" alt="sda" />
                </div>
            </div>
        </section>
    );
}
