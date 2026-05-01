import { useNavigate } from 'react-router-dom';
import PressableButton from '../components/PressableButton';
import Mascot from '../components/Mascot';

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <main className='screen'>
      <p className='eyebrow'>Drive Buddy • Premium Ride Motion</p>
      <h1>Drive Buddy</h1>
      <p className='sub'>Smooth, safe and realtime ride experience.</p>

      <Mascot />

      <div className='row'>
        <PressableButton onClick={() => navigate('/booking')}>Book Ride</PressableButton>
        <PressableButton onClick={() => navigate('/tracking')}>Live Tracking</PressableButton>
      </div>
    </main>
  );
}
