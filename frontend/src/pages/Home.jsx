import React, { useState, useEffect } from 'react'
import { useEventsContext } from "../hooks/useEventsContext"
import EventDetails from '../components/EventDetails'
import EventForm from '../components/EventForm'

const Home = () => {
  const {events, dispatch} = useEventsContext()
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_EVENTS', payload: json})

      }

    }

    fetchEvents()

  }, [dispatch])

  return (
    <div className="home">
      <div className="events">
        {events && events.map((event) => (
          <EventDetails key={event._id} event={event} />
        ))}
      </div>
      
      <button 
        onClick={() => setShowForm(!showForm)} 
        className="button-toggle-form"
          >
        {showForm ? 'Close Form' : 'Add Event'}
      </button>

      {showForm && (
        <div className="form-container" style={{ marginTop: '20px' }}>
          <EventForm />
        </div>
      )}
    </div>
  );
};


export default Home