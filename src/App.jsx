import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import TrackingScreen from './screens/TrackingScreen';
import PageTransition from './components/PageTransition';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function App() {
  const location = useLocation();
  const isSplash = location.pathname === '/';

  return (
    <>
      {!isSplash && <Navbar />}
      <PageTransition>
        <Routes>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/booking' element={<BookingScreen />} />
          <Route path='/tracking' element={<TrackingScreen />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </PageTransition>
      {!isSplash && <Footer />}
    </>
  );
}
