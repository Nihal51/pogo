import { useNavigate } from 'react-router-dom';
import PressableButton from '../components/PressableButton';
import AnimatedRouteMap from '../components/AnimatedRouteMap';
import StaggerList from '../components/StaggerList';
import { useRideStore } from '../store/rideStore';

export default function BookingScreen() {
  const navigate = useNavigate();
  const { ride } = useRideStore();

  return (
    <main className='screen'>
      <h2>Ride Booking</h2>
      <AnimatedRouteMap />

      <StaggerList
        items={[
          `Pickup: ${ride.pickup}`,
          `Drop: ${ride.dropoff}`,
          `Vehicle: ${ride.vehicle}`,
          `ETA: ${ride.etaMinutes} minutes`,
        ]}
      />

      <PressableButton onClick={() => navigate('/tracking')}>Confirm & Track</PressableButton>
    </main>
  );
}
