import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login';
import HomePage from './pages/home';
import Designs from './pages/designs';
import UserDashboard from './pages/dashboard';
import RecommendationsPage from './components/recommendations';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <Login />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        { }
        <Route path="/" element={<HomePage />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />

      </Routes>
    </Router> 
  )
}

export default App
