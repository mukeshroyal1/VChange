import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import  {useAuthContext} from './hooks/useAuthContext'
// Pages $ components 
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Leaderboard from './pages/Leaderboard'
import Events from './pages/Events'

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={user ? <Home/> : <Navigate to="/login"/>}
            />
            <Route
              path="/leaderboard"
              element={<Leaderboard />}
            />
            <Route
              path="/events"
              element={<Events />}
            />
            <Route
              path="/login"
              element={!user ? <Login/> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup/> : <Navigate to="/" />}
            />
          </Routes>

        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
