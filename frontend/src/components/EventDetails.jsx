import { useEventsContext } from "../hooks/useEventsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow"; // to make the date appear (we used date fns)

const EventDetails = ({ event }) => {
    const { dispatch } = useEventsContext();

    const handleClick = async () => {
        const response = await fetch("/api/events/" + event._id, {
            method: "DELETE",
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_EVENT", payload: json });
        }
    };

    return (
        <div className="event-details">
            <h4>{event.title}</h4>
            <p>
                <strong>Hours: </strong>
                {event.hours}
            </p>
            <p>
                <strong>load: </strong>
                {event.load}
            </p>
            <p>
                {formatDistanceToNow(new Date(event.createdAt), {
                    addsuffix: true,
                })}
            </p>
            <span className="material-symbols-outlined" onClick={handleClick}>
                delete
            </span>
        </div>
    );
};

export default EventDetails;
