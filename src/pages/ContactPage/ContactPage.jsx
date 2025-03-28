import { Field, Form, Formik } from "formik";
import React from "react";
import MapComponent from "../../components/MapComponent/MapComponent";
import CustomBTN from "../../components/customBTN/CustomBTN";

export default function ContactPage() {
    return (
        <main className="contact-page container">
            <h2>Get in touch</h2>
            <Formik >
                <Form>
                    <div className="input-container">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" id="firstName" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" id="lastName" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <Field name="email" id="email" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phoneNumber">Phone</label>
                        <Field name="phoneNumber" id="phoneNumber" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="subject">Subject</label>
                        <Field name="subject" id="subject" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="description">description</label>
                        <textarea name="description" id="description"></textarea>
                    </div>
                    <CustomBTN type="submit" title="get query" />
                </Form>
            </Formik>
            <MapComponent />
        </main>
    );
}
