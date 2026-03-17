import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");
  const [course,setCourse] = useState("");

  const token = localStorage.getItem("token");

  // fetch student data
  useEffect(() => {

    const getStudent = async () => {

      try {

        const res = await API.get(`/students/${id}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        });

        setName(res.data.name);
        setAge(res.data.age);
        setEmail(res.data.email);
        setCourse(res.data.course);

      } catch(error){
        console.error(error);
      }

    };

    getStudent();

  }, [id, token]); // ✅ correct dependency

  // update student
  const updateStudent = async () => {

    try{

      await API.put(`/students/${id}`,
      {
        name:name,
        age:age,
        email:email,
        course:course
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      alert("Student updated successfully");

      navigate("/dashboard");

    }catch(error){

      console.error(error);
      alert("Update failed");

    }

  };

  return(

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <h3 className="mb-4">Edit Student</h3>

          <input
          className="form-control mb-3"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />

          <input
          className="form-control mb-3"
          value={age}
          onChange={(e)=>setAge(e.target.value)}
          />

          <input
          className="form-control mb-3"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />

          <input
          className="form-control mb-3"
          value={course}
          onChange={(e)=>setCourse(e.target.value)}
          />

          <button
          className="btn btn-success w-100"
          onClick={updateStudent}
          >
          Update Student
          </button>

        </div>

      </div>

    </div>

  );

}

export default EditStudent;