import { useNavigate } from 'react-router-dom';
import PressableButton from '../components/PressableButton';
import AnimatedRouteMap from '../components/AnimatedRouteMap';
import StaggerList from '../components/StaggerList';

export default function BookingScreen() {
  const navigate = useNavigate();

  return (
    <main className='screen'>
      <h2>Ride Booking</h2>
      <AnimatedRouteMap />

      <StaggerList
        items={[
          'Pickup: City Center',
          'Drop: Airport Terminal 1',
          'Vehicle: Premium Sedan',
          'ETA: 12 minutes',
        ]}
      />

      <PressableButton onClick={() => navigate('/tracking')}>Confirm & Track</PressableButton>
    </main>
  );
}
