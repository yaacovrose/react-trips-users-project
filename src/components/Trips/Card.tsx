import './Style-card.css';
import { Card } from './Card.interface';
import { useNavigate, Link } from "react-router-dom";

export const CardTrip = ({ vacation }: { vacation: Card }): JSX.Element => {

    const navigate = useNavigate();

    const navigateHandler = (id: string) => {
        navigate(`/tripDetails/${id}`);
    }

    return (
        <div className='container'>
        <div className='card-vacation-card' onClick={() => navigateHandler(vacation.id)}>
            <div className="card-content">
                <p className="card-title">{vacation.name}</p>
                <p className="card-destination">{vacation.destination}</p>
                <p className="card-dates">
                    {vacation.startDate} - {vacation.endDate}
                </p>
                <img className="card-image" src={vacation.image} alt="Vacation" />
            </div>
            <div className="card-actions">
                <div>
                    <Link to={`/deleteTrip/${vacation.id}`}>
                        <button className="delete-button" onClick={(e) => e.stopPropagation()}>
                            Delete Trip
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={`/updateTrip/${vacation.id}`}>
                        <button className="update-button" onClick={(e) => e.stopPropagation()}>
                            Update Trip
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

