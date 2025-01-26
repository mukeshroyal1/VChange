import { useEffect } from 'react';
import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from '../hooks/useAuthContext';

// components 
import EventDetails from '../components/EventDetails';
import EventForm from '../components/EventForm';

const Home = () => {
  const { events, dispatch } = useEventsContext();
  const { user } = useAuthContext();

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
      }
    };

    if (user) {
      fetchEvents();
    }
  }, [dispatch, user]);

  return (
    <div className="cta-home">
      <header className="cta-header">
        <h1>Welcome to Our Initiative</h1>
        <p>Join us in making a difference in Kingston.</p>
        <button className="cta-button">Get Involved</button>
      </header>

      <section className="cta-stats">
        <h2>Our Impact</h2>
        <div className="cta-stats-grid">
          <div className="cta-stat">
            <h3>500+</h3>
            <p>Volunteers</p>
          </div>
          <div className="cta-stat">
            <h3>1000+</h3>
            <p>Events Organized</p>
          </div>
          <div className="cta-stat">
            <h3>10,000+</h3>
            <p>Lives Impacted</p>
          </div>
        </div>
      </section>

      <section className="cta-testimonials">
        <h2>Testimonials</h2>
        <div className="cta-testimonials-grid">
          <div className="cta-testimonial">
            <p>"This organization has changed my life. I'm so grateful for the opportunities they've provided."</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="cta-testimonial">
            <p>"Volunteering here has been an incredibly rewarding experience. I've met so many amazing people."</p>
            <h4>- John Smith</h4>
          </div>
        </div>
      </section>

      <section className="cta-recent-events">
        <h2>Recent Events</h2>
        <div className="cta-events-grid">
          {events && events.slice(0, 3).map((event) => (
            <EventDetails key={event._id} event={event} />
          ))}
        </div>
      </section>

      <section className="cta-get-involved">
        <h2>Get Involved</h2>
        <EventForm />
      </section>
    </div>
  );
};

export default Home;
