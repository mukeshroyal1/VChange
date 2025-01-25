import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EventsContextProvider } from './context/EventContext'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <EventsContextProvider>
            <App />
        </EventsContextProvider>
    </React.StrictMode>
);
