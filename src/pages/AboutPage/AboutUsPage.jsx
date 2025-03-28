import React from "react";
import ContactBar from "../../components/contactBar/ContactBar";
import SpecialHeading from "../../components/SpecialHeading/SpecialHeading";

export default function AboutUsPage() {
    return (
        <main className="about-page ">
            <div className="container">
                <h2>About Us Page</h2>
                <SpecialHeading heading={"history"} title={"Creative and renovate fashion trends"} />

            </div>
            <ContactBar />
        </main>
    );
}
