import { useEffect, useRef } from 'react';
import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from '../hooks/useAuthContext';
import { FaUsers, FaCalendarAlt, FaHeart } from 'react-icons/fa';
import EventDetails from '../components/EventDetails';
import EventForm from '../components/EventForm';
import SignUp from './Signup';

const Home = () => {
  const { events, dispatch } = useEventsContext();
  const { user } = useAuthContext();
  const getInvolvedRef = useRef(null);

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

  const scrollToGetInvolved = () => {
    getInvolvedRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="cta-home">
      <header className="cta-header">
        <h2 className="cta-tagline">For Kingston, by Kingston.</h2>
        <p>Join us in making a difference in our community.</p>
        <button className="cta-button" onClick={scrollToGetInvolved}>Get Involved</button>
      </header>

      <section className="cta-stats">
        <h2>Our Impact</h2>
        <div className="cta-stats-grid">
          <div className="cta-stat">
            <FaUsers className="cta-icon" />
            <h3>500+</h3>
            <p>Volunteers</p>
          </div>
          <div className="cta-stat">
            <FaCalendarAlt className="cta-icon" />
            <h3>1000+</h3>
            <p>Events Organized</p>
          </div>
          <div className="cta-stat">
            <FaHeart className="cta-icon" />
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

      <section className="cta-get-involved" ref={getInvolvedRef}>
        <h2>Get Involved</h2>
        <button className="cta-button" onClick={() => <SignUp />}>Sign Up</button>
      </section>
    </div>
  );
};

export default Home;
