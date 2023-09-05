import './Style-card.css'


interface Card {
    name: string,
    destination: string,
    startDate: string,
    endDate: string,
    image: string,
    activities: string[]
}


export const CardTrip = ( { vacation }: { vacation: Card } ): JSX.Element => {
    
    return (
        <div className='card'>
            <p>{vacation.name}</p>
            <p>{vacation.destination}</p>
            <p>{vacation.startDate}</p>
            <p>{vacation.endDate}</p>
            <img className="cardImg" src={vacation.image}></img>
        </div>

    )
}

