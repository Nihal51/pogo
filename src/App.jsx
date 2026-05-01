import { Navigate, Route, Routes } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import TrackingScreen from './screens/TrackingScreen';
import PageTransition from './components/PageTransition';

export default function App() {
  return (
    <PageTransition>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/booking' element={<BookingScreen />} />
        <Route path='/tracking' element={<TrackingScreen />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </PageTransition>
  );
}
