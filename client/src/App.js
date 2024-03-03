// import routes from react-router-dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

/* importing components and pages  */
import LoginPage from "./pages/LoginPage";
import AdminDashBoard from "./pages/AdminDashBoard";
import ProfDashBoard from "./pages/ProfDashBoard";
import StudentDashBoard from "./pages/StudentDashBoard";
/* importing components and pages  */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route to login page */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/adminDashboard" Component={AdminDashBoard} />
          <Route path="/profDashboard" Component={ProfDashBoard} />
          <Route path="/stdDashboard" Component={StudentDashBoard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
