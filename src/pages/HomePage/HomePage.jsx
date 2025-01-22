import ContactBar from "../../components/contactBar/ContactBar";
import Sponsors from "../../components/sponsors/Sponsors";

export default function HomePage() {
    return (
        <>
            <main className="home-page ">
                <section className="page-test hero-section x-padding"><div className="hero-section"></div></section>
                <Sponsors />
                <ContactBar />
            </main>
        </>
    );
}
