import axios from "axios";
import { CardTrip } from "./Card"
import { Card } from './Card.interface';
import { Key, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Style-trips.css'


export default function Trips(): JSX.Element {

    const [vacations, setVacations] = useState<Card[]>([])

    const axiosTrips = async () => {
        try {
            const vactionsResult: Card[] = await (await axios.get('http://localhost:3000/api/trips/')).data;
            setVacations(vactionsResult);
        } catch (err) {
            throw err
        }
    }

    useEffect(() => {
        axiosTrips()
    }, [])


    return (
        <div>
            <div>
                <div className="trip">
                    {vacations!.map((vacation) => (
                        <CardTrip key={vacation.id} vacation={vacation} />
                    ))}
                </div>
                <Link to='/'>
                    <button>
                        Home Page
                    </button>
                </Link>
                <Link to='/newTrip'>
                <button>
                    create new trip
                </button>
                </Link>
            </div>
        </div>
    )
}

