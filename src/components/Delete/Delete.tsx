import { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

export const Delete = (): JSX.Element => {
    
    const { id } = useParams()

    const axiosDeleteTrip = async () => {
        alert('delete a trip from the list?')
        try {
            const response = await (await axios.delete(`http://localhost:3000/api/trips/${id}`, {
                headers: { authorization: localStorage.getItem('token') },
            })).data;
            if (response.status === 200) {
                console.log(response.status)
            } else {
                console.error("Error deleting trip. Status code:", response.status);
            }
        } catch (error) {
            console.error("Error deleting trip:", error);
        }
    }

    useEffect(() => {
        axiosDeleteTrip()
    }, [])

    return (
        <div>
            <Link to={'/trips'}>
                <button>all trips</button>
            </Link>
        </div>
    )
}