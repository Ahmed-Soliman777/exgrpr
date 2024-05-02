// import routes from react-router-dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

/* importing components and pages  */
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
/* importing components and pages  */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route to login page */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/student_dashboard" element={<StudentDashboard />} />
          <Route path="/professor_dashboard" element={<ProfessorDashboard />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
