
import ContactBar from "../../components/contactBar/ContactBar";
import CustomBTN from "../../components/customBTN/CustomBTN";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import HeroSection from "../../components/HeroSection/HeroSection";
import PaginationSection from "../../components/paginationSection/PaginationSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sponsors from "../../components/sponsors/Sponsors";
import TodayGadgetsSection from "../../components/TodayGadgetsSection/TodayGadgetsSection";

export default function HomePage() {
    return (
        <>
            <main className="home-page ">
                <HeroSection />
                <FeaturedProducts />
                {/* <div className="page-test x-padding" style={{ display: "flex", justifyContent: "", alignItems: "center", gap: "2rem" }}>
                    <ProductCard
                        title={"Mobile"}
                        productName={"Apple iPhone 6s"}
                        productOldPrice={""}
                        productPrice={"299.00"}
                        imageURL={"./src/assets/images/Products/AppleIphone6s.png"}
                        rating={""}
                        discount={""}
                    />
                    <ProductCard
                        title={"Drone Gamepad Laptop Mobile"}
                        productName={"Bluetooth Gamepad"}
                        productOldPrice={""}
                        productPrice={"199.00"}
                        imageURL={"./src/assets/images/Products/BluetoothGamepad.png"}
                        rating={""}
                        discount={""}
                    />
                    <ProductCard
                        title={"Headphone Laptop Mobile"}
                        productName={"Kotion Headset"}
                        productOldPrice={""}
                        productPrice={"29.00"}
                        imageURL={"./src/assets/images/Products/KotionHeadset.png"}
                        rating={""}
                        discount={""}
                    />
                    <ProductCard
                        title={"3d Glass Gamepad Google Glass"}
                        productName={"Mini 3D Glass"}
                        productOldPrice={"270.00"}
                        productPrice={"220.00"}
                        imageURL={"./src/assets/images/Products/Mini3DGlass.png"}
                        rating
                        discount={""}
                    />
                </div> */}
                <TodayGadgetsSection />
                <PaginationSection />
                <Sponsors />
                <ContactBar />
            </main>
        </>
    );
}
