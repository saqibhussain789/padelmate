import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "./components/common/ScrollToTop";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import AppLayout from "./components/layout/AppLayout";

// import Home from "./components/Dashboard/Home";
import Club from "./pages/Club/Club";

import UserProfiles from "./pages/UserProfile/UserProfiles";
import Player from "./pages/Player/Player";


function App() {
  const [count, setCount] = useState(0);

  return (

    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Club />} />
            <Route path="/Clubs"   element={<Club/>}   />
            <Route index path="/Players" element={<Player />} />
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
