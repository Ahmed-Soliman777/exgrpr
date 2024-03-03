// import routes from react-router-dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

/* importing components and pages  */
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
/* importing components and pages  */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route to login page */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
