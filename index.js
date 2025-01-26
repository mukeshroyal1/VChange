import React from 'react';
import ReactDOM from 'react-dom/client';
import './frontend/src/index.css';
import App from './frontend/src/App';
import { EventsContextProvider} from './frontend/src/context/EventContext'
import { AuthContextProvider} from './frontend/src/context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <EventsContextProvider>
      <App />
    </EventsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
