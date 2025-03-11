import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "./components/common/ScrollToTop";
import AppLayout from "./layout/AppLayout";
import Home from './pages/Dashboard/Home';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            </Route>
            </Routes>
      </Router>
      
    </>
  )
}

export default App
