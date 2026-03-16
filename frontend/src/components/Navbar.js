import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/");

    };

    return(

        <nav className="navbar navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    Student Management System
                </Link>

                <Link className="btn btn-outline-light me-2" to="/">
                             Home
                </Link>

                <div>

                    {!token && (
                        <button
                        className="btn btn-primary"
                        onClick={() => navigate("/login")}
                        >
                        Login
                        </button>
                    )}

                    {token && (
                        <button
                        className="btn btn-danger"
                        onClick={logout}
                        >
                        Logout
                        </button>
                    )}

                </div>

            </div>

        </nav>

    );

}

export default Navbar;