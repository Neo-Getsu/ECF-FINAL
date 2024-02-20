import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import './App.css'

import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />

            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
