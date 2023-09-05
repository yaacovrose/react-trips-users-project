import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Trips from './components/Trips/Trips';
import LogIn from './components/LogIn/Login';
import SignIn from './components/SignIn/SignIn';
import NewTrip from './components/NewTripForm/NewTripForm';


function Ruoter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Trips" element={<Trips />} />
                    <Route path="/LogIn" element={<LogIn />} />
                    <Route path="/SignIn" element={<SignIn  />} />
                    <Route path="/newTrip" element={<NewTrip  />} />

                </Routes>
            </Router>
        </div>
    )
}
export default Ruoter