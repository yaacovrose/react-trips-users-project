import Trips from "../Trips/Trips"
import LogIn from "../LogIn/Login";
import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Home(): JSX.Element {


    return (
        <div>
            <Link to='/Trips'>
            <button >
                Show all trips
            </button>
            </Link>
            <Link to='/LogIn'>
            <button>
                Log In
            </button>
            </Link>
            <Link to='SignIn'>
            <button>
                Sign In
            </button>
            </Link>
        </div>
    )
} 