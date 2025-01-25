import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EventsContextProvider} from './context/EventContext'
import { AuthContextProvider} from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <EventsContextProvider>
      <App />
    </EventsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
