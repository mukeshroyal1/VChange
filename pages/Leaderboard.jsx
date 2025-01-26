import { useEffect, useState } from 'react';
import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from '../hooks/useAuthContext';

// components 
import EventDetails from '../components/EventDetails';

const Leaderboard = () => {
  const { events, dispatch } = useEventsContext();
  const { user } = useAuthContext();
  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_EVENTS', payload: json });
        const sorted = json.sort((a, b) => b.hours - a.hours);
        setSortedEvents(sorted);
      }
    };

    if (user) {
      fetchEvents();
    }
  }, [dispatch, user]);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="podium">
        {sortedEvents.slice(0, 3).map((event, index) => (
          <div key={event._id} className={`podium-item podium-${index + 1}`}>
            <span className="podium-rank">{index + 1}</span>
            <EventDetails event={event} />
          </div>
        ))}
      </div>
      <div className="events">
        {sortedEvents.slice(3).map((event) => (
          <EventDetails key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
