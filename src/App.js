import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Chambres from './Pages/Chambres'
import ChambreDetail from './Pages/ChambreDetail'
import ChambreDetails from './Pages/ChambreDetails'
import ChambreLuxe from './Pages/ChambreLuxe'
import ChambreGrandLuxe from './Pages/ChambreGrandLuxe'
import Propos from './Pages/Propos'
import ContactPage from './Pages/ContactPage'
import ReservationPage from './Pages/ReservationPage'
function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/chambres' element={<Chambres />} />
        <Route path='/chambres/details/:code' element={<ChambreDetails />} />
        <Route path='/a-propos' element={<Propos />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/reservation' element={<ReservationPage />} />
        <Route path='/chambres/details' element={<ChambreDetail />} />
        <Route path='/chambres/luxe' element={<ChambreLuxe />} />
        <Route path='/chambres/grandluxe' element={<ChambreGrandLuxe />} />
      </Routes>
    </Router>
  )
}

export default App
