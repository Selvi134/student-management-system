import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const studentsPerPage = 10;

    const navigate = useNavigate();
    const role = localStorage.getItem("role");

    const fetchStudents = async () => {
        try {

            const token = localStorage.getItem("token");

            const res = await API.get("/students", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setStudents(res.data);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const deleteStudent = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await API.delete(`/students/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Student deleted");

            fetchStudents();

        } catch (error) {

            console.log(error);
            alert("Delete failed");

        }

    };


    /* SEARCH FILTER */

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );


    /* PAGINATION */

    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

    const currentStudents = filteredStudents.slice(
        indexOfFirstStudent,
        indexOfLastStudent
    );

    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);


    return (

        <div className="container mt-4">

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2 className="fw-bold">Student Dashboard</h2>

                {role === "admin" && (
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/add-student")}
                    >
                        + Add Student
                    </button>
                )}

            </div>


            {/* Search Bar */}

            <input
                type="text"
                placeholder="Search student..."
                className="form-control mb-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            {/* Table Card */}

            <div className="card shadow">

                <div className="card-header bg-dark text-white">
                    Student List
                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover table-bordered align-middle">

                            <thead className="table-dark">

                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Course</th>
                                    {role === "admin" && <th>Actions</th>}
                                </tr>

                            </thead>

                            <tbody>

                                {currentStudents.length > 0 ? (

                                    currentStudents.map((student) => (

                                        <tr key={student.id}>

                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.age}</td>
                                            <td>{student.email}</td>
                                            <td>{student.course}</td>

                                            {role === "admin" && (

                                                <td>

                                                    <button
                                                        className="btn btn-sm btn-warning me-2"
                                                        onClick={() =>
                                                            navigate(`/edit-student/${student.id}`)
                                                        }
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => deleteStudent(student.id)}
                                                    >
                                                        Delete
                                                    </button>

                                                </td>

                                            )}

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td colSpan="6" className="text-center text-muted">

                                            No students found

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


            {/* Pagination */}

            <div className="d-flex justify-content-center mt-3">

                <button
                    className="btn btn-secondary me-2"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Prev
                </button>

                <span className="mt-2">
                    Page {currentPage} / {totalPages || 1}
                </span>

                <button
                    className="btn btn-secondary ms-2"
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>

            </div>

        </div>

    );

}

export default Dashboard;