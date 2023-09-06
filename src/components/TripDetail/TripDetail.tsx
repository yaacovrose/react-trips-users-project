// import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import './Style-tripDetail.css'


interface Card {
  id: string,
  name: string,
  destination: string,
  startDate: string,
  endDate: string,
  image: string,
  activities: string[]
}

export default function TripDetails() {

  const [vacation, setVacation] = useState<Card | null>(null);

  const { id } = useParams()

  const axiosTrip = async () => {
    try {
      const vacationResult: Card = await (await axios.get(`http://localhost:3000/api/trips/${id}`)).data;
      setVacation(vacationResult)
    } catch (err) {
      throw err
    }
  }

  useEffect(() => {
    axiosTrip()
  }, [])

  return (
    <div>
      {vacation ? (
        <>
          <p>{vacation.name}</p>
          <p>{vacation.destination}</p>
          <p>{vacation.startDate}</p>
          <p>{vacation.endDate}</p>
          <img className="cardImg" src={vacation.image} alt={vacation.name} />
          <div>
            {vacation.activities.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
          <Link to='/trips'>
          <button>
            all trips
          </button>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

}