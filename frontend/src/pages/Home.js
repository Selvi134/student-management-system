import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {

    return (

        <div>

            {/* HERO SECTION */}

            <section className="bg-light py-5">

                <div className="container">

                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}

                        <div className="col-md-6">

                            <h1 className="display-5 fw-bold">
                                Student Management System
                            </h1>

                            <p className="lead mt-3">
                                A modern platform to manage student records,
                                courses, and academic data efficiently.
                            </p>

                            <div className="mt-4">

                                <Link to="/login" className="btn btn-primary me-3">
                                    Login
                                </Link>

                                <Link to="/signup" className="btn btn-outline-dark">
                                    Create Account
                                </Link>

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}

                        <div className="col-md-6 text-center">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                                alt="students"
                                className="img-fluid hero-image"
                                style={{ maxHeight: "300px" }}
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* FEATURES SECTION */}

            <section className="py-5">

                <div className="container">

                    <h2 className="text-center mb-5">
                        System Features
                    </h2>

                    <div className="row">

                        {/* FEATURE 1 */}

                        <div className="col-md-4">

                            <div className="card shadow border-0 text-center p-4 feature-card">

                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                                    alt="students"
                                    width="70"
                                    className="mx-auto mb-3 feature-icon"
                                />

                                <h5>Student Records</h5>

                                <p className="text-muted">
                                    Store and manage student information
                                    securely in the system.
                                </p>

                            </div>

                        </div>


                        {/* FEATURE 2 */}

                        <div className="col-md-4">

                            <div className="card shadow border-0 text-center p-4 feature-card">

                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                                    alt="security"
                                    width="70"
                                    className="mx-auto mb-3 feature-icon"
                                />

                                <h5>Secure Login</h5>

                                <p className="text-muted">
                                    Authentication using JWT to protect
                                    sensitive student data.
                                </p>

                            </div>

                        </div>


                        {/* FEATURE 3 */}

                        <div className="col-md-4">

                            <div className="card shadow border-0 text-center p-4 feature-card">

                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                                    alt="dashboard"
                                    width="70"
                                    className="mx-auto mb-3 feature-icon"
                                />

                                <h5>Admin Dashboard</h5>

                                <p className="text-muted">
                                    Admin can add, edit, and delete student
                                    records easily.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* FOOTER */}

            <footer className="bg-dark text-white text-center py-3">

                <p className="mb-0">
                    © 2026 Student Management System
                </p>

            </footer>

        </div>

    );

}

export default Home;