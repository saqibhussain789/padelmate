import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/general components/ScrollToTop";
import AppLayout from "./Components/layout/AppLayout.jsx";
import Dashboard from "./Pages/Dashboard/dashboard.jsx";
import CalendarPage from "./Pages/Calender/Calender.jsx"; // Import Calendar page

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Redirect "/" to "/dashboard" */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard inside AppLayout */}
        <Route path="/" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<CalendarPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
