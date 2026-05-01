import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate('/home'), 2300);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <main className='screen center'>
      <div className='db-logo'>
        <svg viewBox='0 0 240 120'>
          <path className='road-d' d='M30 20 L30 100 L90 100 L90 20 Z' />
          <text x='110' y='92' className='b-slide'>B</text>
        </svg>
      </div>
      <p className='tag'>Drive Buddy</p>
    </main>
  );
}
