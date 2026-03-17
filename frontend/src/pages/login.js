import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {

        try{

            const formData = new URLSearchParams();
            formData.append("username", username);
            formData.append("password", password);

            const res = await API.post("/auth/login", formData.toString(), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            console.log(res.data);

            localStorage.setItem("token",res.data.access_token);
            localStorage.setItem("role", res.data.role);
            alert("login successful");
            navigate("/dashboard");

        }catch (error){
            console.error(error);
            alert("login failed");
        }
    };

    return (
        <div className = "container mt-5">
            <h2> Login </h2>

            <input type = "text" className = "form-control mb-3" placeholder = "Username"  onChange = {(e) => setUsername(e.target.value)}/>
            <input type = "password" className = "form-control mb-3" placeholder = "password" onChange = {(e) => setPassword(e.target.value)}/>

            <button className = "btn btn-primary" onClick = {handleLogin}>Login</button>

            <p className="mt-3">
                  New user? 
                  <a href="/signup" className="text-decoration-none">Create account</a>
            </p>

        </div>
    )
}

export default Login;