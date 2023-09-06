import axios from "axios";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../Trips/Card.interface';



export default function UpdateTrip(): JSX.Element {

    const { id } = useParams()

    const [vacations, setVacations] = useState<Card>()

    const axiosTrip = async () => {
        try {
            const vactionsResult: Card = await (await axios.get(`http://localhost:3000/api/trips/${id}`)).data;
            setVacations(vactionsResult);
        } catch (err) {
            throw err
        }
    }

    useEffect(() => {
        axiosTrip();
    }, []);

    useEffect(() => {
        if (vacations) {
            setTripData({
                name: vacations.name,
                destination: vacations.destination,
                startDate: vacations.startDate,
                endDate: vacations.endDate,
                image: vacations.image,
                // activities: [...vacations.activities],
            });
        }
    }, [vacations]);

    const [tripData, setTripData] = useState({
        name: '',
        destination: '',
        startDate: '',
        endDate: '',
        image: '',
        // activities: [],
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTripData({
            ...tripData,
            [name]: value,
        });
    };

    const axiosAddTrip = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/trips/${id}`, tripData, {
                headers: { authorization: localStorage.getItem('token') }
            });
            if (response.status === 200) {
                console.log('Trip added successfully:', response.data);
            } else {
                console.error('Trip not added. Status:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div>
            <form onSubmit={axiosAddTrip}>
                <div>
                    <label htmlFor="name">name:</label>
                    <input
                        type="text"
                        name="name"
                        value={tripData.name}
                        onChange={handleInputChange}
                        placeholder={tripData.name}
                        id="name"
                    />
                </div>
                <div>
                    <label htmlFor="destination">destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={tripData.destination}
                        onChange={handleInputChange}
                        placeholder={tripData.destination}
                        id="destination"
                    />
                </div>
                <div>
                    <label htmlFor="startDate">startDate:</label>
                    <input
                        type="text"
                        name="startDate"
                        value={tripData.startDate}
                        onChange={handleInputChange}
                        placeholder={tripData.startDate}
                        id="startDate"
                    />
                </div>
                <div>
                    <label htmlFor="endDate">endDate:</label>
                    <input
                        type="text"
                        name="endDate"
                        value={tripData.endDate}
                        onChange={handleInputChange}
                        placeholder={tripData.endDate}
                        id="endDate"
                    />
                </div>
                <div>
                    <label htmlFor="image">image:</label>
                    <input
                        type="text"
                        name="image"
                        value={tripData.image}
                        onChange={handleInputChange}
                        placeholder={tripData.image}
                        id="image"
                    />
                </div>
                {/* <label htmlFor="activities">activity:</label>
                {tripData.activities!.map((activity, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={activity}
                            onChange={(e) => {
                                const updatedActivities = [...tripData.activities!];
                                updatedActivities[index] = e.target.value;
                                setTripData({
                                    ...tripData,
                                    activities: updatedActivities,
                                });
                            }}
                            placeholder={activity}
                        />
                    </div>))} */}
                <button type="submit">Add Trip</button>
            </form>
        </div>
    )
}


