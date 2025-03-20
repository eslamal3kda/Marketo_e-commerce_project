import React from "react";
// import CustomBTN from "../customBTN/CustomBTN";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSectionSlide from "../HeroSectionSlider/HeroSectionSlide";

export default function HeroSection() {
    return (
        <section className="hero-section">
            <Swiper >
                <SwiperSlide>
                    <HeroSectionSlide key={1} imgOne={"./src/assets/images/"} imgTwo={""} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSectionSlide key={2} imgOne={""} imgTwo={""} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSectionSlide key={3} imgOne={""} imgTwo={""} />
                </SwiperSlide>
            </Swiper>
            {/* <div className="container">
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
            </div> */}
        </section>
    );
}
