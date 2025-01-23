import ContactBar from "../../components/contactBar/ContactBar";
import HomePagination from "../../components/homePagination/HomePagination";
import Sponsors from "../../components/sponsors/Sponsors";

export default function HomePage() {
    return (
        <>
            <main className="home-page ">
                <section className="page-test hero-section x-padding"><div className="hero-section"></div></section>
                <section className=" home-pagination-section x-padding">
                    <HomePagination title='Recent Product' id={1} />
                    <HomePagination oldPrice='old' title='Trending Products' id={2} />
                    <HomePagination title='Featured Product' id={3} />
                </section>
                <Sponsors />
                <ContactBar />
            </main>
        </>
    );
}
