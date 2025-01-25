import ContactBar from "../../components/contactBar/ContactBar";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import PaginationSection from "../../components/paginationSection/PaginationSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sponsors from "../../components/sponsors/Sponsors";

export default function HomePage() {
    return (
        <>
            <main className="home-page ">
                <section className="page-test hero-section x-padding"><div className="hero-section"></div></section>
                <FeaturedProducts />
                <div className="page-test x-padding" style={{display:"flex" ,justifyContent:'center',alignItems:'center'}}>
                    <ProductCard productName productPrice imageURL rating discount/>
                </div>
                <PaginationSection />
                <Sponsors />
                <ContactBar />
            </main>
        </>
    );
}
