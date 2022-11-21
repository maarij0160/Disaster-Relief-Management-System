import Login_page from './frontend/Login/Login_page'
import Signup from './frontend/Signup/Signup'
import Header from './Extras/Header'
import Admin_Home  from './frontend/Admin/Admin_Home';
import Admin_Organizations from './frontend/Admin/Admin_Organizations';
import Admin_Analysis from './frontend/Admin/Admin_Analysis';
import Admin_Relief_Program from './frontend/Admin/Admin_Relief_Program';
import Admin_sidebar from './Extras/Admin_sidebar';
import Admin_Disaster from './frontend/Admin/Admin_Disaster'
import React from 'react';
import './App.css'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login_page />} />
        <Route path="/Signup.js" element={<Signup />} />
        <Route path='/Header.js' element={<Header />} />
        <Route path='/Admin_Home.js' element={<Admin_Home />} />
        <Route path='/Admin_sidebar.js' element={<Admin_sidebar />} />
        <Route path='/Admin_Organizations.js' element={<Admin_Organizations />} />
        <Route path='/Admin_Analysis.js' element={<Admin_Analysis />} />
        <Route path='/Admin_Relief_Program.js' element={<Admin_Relief_Program />} />
        <Route path='/Admin_Disaster.js' element={<Admin_Disaster />} />
      </Routes>
    </Router>
  )
}

export default App;