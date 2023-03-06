import './App.css'
import NavBar from './Components/NavBar';
import Rentals from './Components/Rentals';
import Reviews from './Components/Reviews';
import Location from './Components/Location';
import Host from './Components/Host';
import Footer from './Components/Footer';
import { NavProvider } from './Context/NavContext';
import { HostProvider } from './Context/HostContext'
import { ReviewProvider} from './Context/ReviewContext';
import { RegionProvider } from './Context/RegionContext';
import { LocationProvider } from './Context/LocationContext';
import MobileNavbar from './Components/MobileNavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LocationShowMore from './Components/LocationShowMore';

function App() {
  return (
    <Router>
    <div className="app-container">
      <div className="nav-container">
        <NavProvider>
          <NavBar />
        </NavProvider>
      </div>
      <div className="nav-mobile-container">
        <NavProvider>
          <MobileNavbar />
        </NavProvider>
      </div>
      <div className="main-content-container">
        <div className='rentals-content-container'>
          <div className="rentals-container">
            <NavProvider>
              <Rentals />
            </NavProvider>
          </div>
          <div className="reviews-container">
          <ReviewProvider>
            <Reviews />
          </ReviewProvider>
          </div>
          <div className="location-container">
            
              <Location />
            
          </div>
          <div className="host-container">
            <HostProvider>
              <Host />
            </HostProvider>
          </div>
        </div>
      </div>
      <footer className="footer-container">
        <RegionProvider>
          <Footer />
        </RegionProvider>
      </footer>
    </div>
      <Routes>
        
          <Route path='location' component={<LocationShowMore />} />
        
      </Routes>
    </Router> 
  );
}

export default App
