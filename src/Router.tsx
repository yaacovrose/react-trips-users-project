import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Trips from './components/Trips/Trips';
import LogIn from './components/UserLogin/Login';
import SignIn from './components/UserRegistration/SignIn';
import NewTrip from './components/NewTripForm/NewTripForm';
import TripDetails from './components/TripDetail/TripDetail';
import { Delete } from './components/Delete/Delete';
import UpdateTrip from './components/UpdateTripDetails/UpdateTripDetails';


function Ruoter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Trips" element={<Trips />} />
                    <Route path="/LogIn" element={<LogIn />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/newTrip" element={<NewTrip />} />
                    <Route path="/tripDetails/:id" element={<TripDetails />} />
                    <Route path="/deleteTrip/:id" element={<Delete />} />
                    <Route path="/updateTrip/:id" element={<UpdateTrip />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Ruoter