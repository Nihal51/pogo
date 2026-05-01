import { useNavigate } from 'react-router-dom';
import PressableButton from '../components/PressableButton';
import AnimatedRouteMap from '../components/AnimatedRouteMap';
import StaggerList from '../components/StaggerList';
import { useRideStore } from '../store/rideStore';

export default function TrackingScreen() {
  const navigate = useNavigate();
  const { ride } = useRideStore();

  return (
    <main className='screen'>
      <h2>Live Tracking</h2>
      <AnimatedRouteMap live />

      <StaggerList
        items={[
          `Driver: ${ride.driver}`,
          `Distance Remaining: ${ride.remainingKm} km`,
          `Estimated Arrival: ${Math.round(ride.etaMinutes * 0.7)} min`,
        ]}
      />

      <PressableButton onClick={() => navigate('/home')}>Back Home</PressableButton>
    </main>
  );
}
