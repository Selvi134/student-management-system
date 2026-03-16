import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async () => {

        try {

            await API.post("/auth/register", {
                username: username,
                email: email,
                password: password
            });

            alert("Account created successfully");

            navigate("/"); // go to login page

        } catch (error) {

  if (error.response && error.response.data.detail) {

      alert(error.response.data.detail);

  } else {

      alert("Signup failed");

  }

}

    };

    return (

        <div className="container mt-5" style={{maxWidth:"500px"}}>

            <h2 className="mb-4">Student Signup</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
            />

            <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button
                className="btn btn-success w-100"
                onClick={handleSignup}
            >
                Create Account
            </button>

        </div>

    );

}

export default Signup;