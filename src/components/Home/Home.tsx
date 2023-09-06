import { Link } from "react-router-dom";
import './Style-home.css'

export default function Home(): JSX.Element {
    return (
        <div className="home-container">
            <div className="background-image">
                <h1 className="title">Welcome to Our Website</h1>
                <Link to='/Trips'>
                    <button className="button">
                        Show all trips
                    </button>
                </Link>
                <Link to='/LogIn'>
                    <button className="button">
                        Log In
                    </button>
                </Link>
                <Link to='SignIn'>
                    <button className="button">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    )
}
