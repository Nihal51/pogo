import { useNavigate } from 'react-router-dom';
import PressableButton from '../components/PressableButton';
import AnimatedRouteMap from '../components/AnimatedRouteMap';
import StaggerList from '../components/StaggerList';

export default function TrackingScreen() {
  const navigate = useNavigate();

  return (
    <main className='screen'>
      <h2>Live Tracking</h2>
      <AnimatedRouteMap live />

      <StaggerList
        items={[
          'Driver: Aman Verma',
          'Distance Remaining: 3.8 km',
          'Estimated Arrival: 8 min',
        ]}
      />

      <PressableButton onClick={() => navigate('/home')}>Back Home</PressableButton>
    </main>
  );
}
