import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "./components/general components/ScrollToTop";
// import SignIn from "./pages/AuthPages/SignIn";
// import SignUp from "./pages/AuthPages/SignUp";
import SignIn from "./components/Dashboard/Pages/AuthPages/SignIn";
import SignUp from "./components/Dashboard/Pages/AuthPages/SignUp";
import AppLayout from "./components/layout/AppLayout";
import Player from "./components/Dashboard/Pages/Player/Player";

// import Home from "./components/Dashboard/Home";
import Club from "./components/Dashboard/Pages/Club/Club";

import UserProfiles from "./pages/UserProfile/UserProfiles";



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
