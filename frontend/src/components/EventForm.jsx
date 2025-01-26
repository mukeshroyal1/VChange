import { useState } from "react";
import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const EventForm = () => {
  const { dispatch } = useEventsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [hours, setHours] = useState('');
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // State to toggle visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const event = { title, load, hours };

    const response = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setHours("");
      setError(null);
      dispatch({ type: "CREATE_EVENT", payload: json });
    }
  };

  return (
    <>
      {user && user.role === "organizer" && ( // Check if user is an organizer
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "var(--primary)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Close Form" : "Add Event"}
        </button>
      )}

      {isVisible && (
        <form className="create" onSubmit={handleSubmit}>
          <h3>Add a New Event</h3>

          <label>Event Title:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label>Load (kg):</label>
          <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
          />

          <label>Hours:</label>
          <input
            type="number"
            onChange={(e) => setHours(e.target.value)}
            value={hours}
          />

          <button>Add Event</button>
          {error && <div className="error">{error}</div>}
        </form>
      )}
    </>
  );
};

export default EventForm;

