import React, { useState, useEffect } from "react";
import { useEventsContext } from "../hooks/useEventsContext";
import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";

const Home = () => {
    const { events, dispatch } = useEventsContext();
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch("/api/events");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_EVENTS", payload: json });
            }
        };

        fetchEvents();
    }, [dispatch]);

    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-8">
                    <h2 className="mb-4">Events</h2>
                    {events &&
                        events.map((event) => (
                            <div className="mb-3" key={event._id}>
                                <EventDetails event={event} />
                            </div>
                        ))}
                </div>

                <div className="col-lg-4 position-relative">
                    {showForm ? (
                        <div
                            className="card p-4 shadow-sm position-fixed top-50 translate-middle-y end-0 m-4"
                            style={{ width: "350px" }}
                        >
                            <EventForm />
                        </div>
                    ) : (
                        <div
                            className="card p-4 shadow-sm position-fixed top-50 translate-middle-y end-0 m-4"
                            style={{ width: "350px" }}
                        >
                            <h5>Select an Event</h5>
                            <p className="text-muted">
                                Click on an event to see its details here.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <button
                onClick={() => setShowForm(!showForm)}
                className={`btn btn-${showForm ? "danger" : "primary"} position-fixed bottom-0 end-0 m-4`}
            >
                {showForm ? "Close Form" : "Add Event"}
            </button>
        </div>
    );
};

export default Home;
