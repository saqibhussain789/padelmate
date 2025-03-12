import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "./components/common/ScrollToTop";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import Club from "./pages/Dashboard/Club";
import UserProfiles from "./pages/UserProfiles";

function App() {
  const [count, setCount] = useState(0);

  return (

    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/Clubs"   element={<Club/>}   />
          </Route>

          {/* Others Page */}
          <Route path="/profile" element={<UserProfiles />} />


          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
