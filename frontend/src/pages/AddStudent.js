import React , { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try{

            const token = localStorage.getItem("token");

            await API.post("/students",
                {
                    name: name,
                    age: age,
                    email: email,
                    course: course
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            alert("student added successfully");

            navigate("/dashboard");
        } catch (error){
            console.error(error);
            alert("failed to add student");
        }
    };

    return(
        <div className = "container mt-5">
            <h2> Add Student </h2>
            <input 
                type = "text" 
                className = "form-control mb-3"
                placeholder = "Name"
                onChange = {(e) => setName(e.target.value)}
            />
            <input
                 type ="number"
                 className = "form_control mb-3"
                 placeholder = "Age"
                 onChange={(e) => setAge(e.target.value)}
            />
            <input
                type= "email"
                className = "form-control mb-3"
                placeholder = "Email"
                onChange= {(e)=> setEmail(e.target.value)} 
            />
            <input
                 type = "text"
                 className = "form-control mb-3"
                 placeholder = "Course"
                 onChange = {(e) => setCourse(e.target.value)}
            />

            <button className = "btn btn-success" onClick ={handleSubmit}>
                Add Student
            </button>
                 
            
        </div> 
    );
}

export default AddStudent;
