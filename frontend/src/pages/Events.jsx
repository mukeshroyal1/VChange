import React from "react";

const Events = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Events</h2>
            <p className="text-center mb-5 text-muted">
                Discover local volunteering opportunities tailored for you.
            </p>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* Event Card 1 */}
                <div className="col">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Event Title 1</h5>
                            <p className="card-text">
                                Event description goes here. It includes details
                                about the event.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Join Event
                            </a>
                        </div>
                    </div>
                </div>

                {/* Event Card 2 */}
                <div className="col">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Event Title 2</h5>
                            <p className="card-text">
                                Event description goes here. It includes details
                                about the event.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Join Event
                            </a>
                        </div>
                    </div>
                </div>

                {/* Event Card 3 */}
                <div className="col">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Event Title 3</h5>
                            <p className="card-text">
                                Event description goes here. It includes details
                                about the event.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Join Event
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
