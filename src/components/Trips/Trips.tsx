import axios from "axios";
import { CardTrip } from "./Card"
import { Key, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Style-trips.css'


interface Card {
    id: Key | null | undefined;
    map(arg0: (vacation: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    name: string,
    destination: string,
    startDate: string,
    endDate: string,
    image: string,
    activities: string[]
}

export default function Trips(): JSX.Element {

    const [vacations, setVacation] = useState<Card[]>([])


    const axiosTrips = async () => {
        try {
            const result: Card[] = await axios.get('http://localhost:3000/api/trips/')
            console.log(result)
            setVacation(result?.data)
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
                        <CardTrip vacation={vacation} key={vacation.id} />
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

