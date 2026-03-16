import { BrowserRouter,Routes , Route } from "react-router-dom";
import Login from "./pages/login.js";
import Dashboard from "./pages/Dashboard.js";
import AddStudent from "./pages/AddStudent.js";
import EditStudent from "./pages/EditStudent.js";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/signup" element = {<Signup/>}/>
        <Route path = "/dashboard" element = {<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path = "/add-student" element = {<ProtectedRoute><AddStudent/></ProtectedRoute>} />
        <Route path = "/edit-student/:id" element = {<ProtectedRoute><EditStudent/></ProtectedRoute>} />

      </Routes>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;