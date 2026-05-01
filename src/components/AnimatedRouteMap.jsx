import useInterpolatedProgress from '../hooks/useInterpolatedProgress';

export default function AnimatedRouteMap({ live = false }) {
  const progress = useInterpolatedProgress();

  return (
    <section className='route-map map-fade'>
      <svg viewBox='0 0 360 220' className='route-svg' aria-hidden='true'>
        <defs>
          <linearGradient id='roadGlow' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#5f4a00' />
            <stop offset='50%' stopColor='#F4B400' />
            <stop offset='100%' stopColor='#5f4a00' />
          </linearGradient>
        </defs>
        <path className='road-bg' d='M20 160 C 90 120, 150 170, 210 120 S 330 80, 340 60' />
        <path className={`road-active ${live ? 'pulse' : ''}`} d='M20 160 C 90 120, 150 170, 210 120 S 330 80, 340 60' />
        <circle cx='20' cy='160' r='6' className='pin pickup' />
        <circle cx='340' cy='60' r='6' className='pin drop' />
      </svg>
      <div className={`car ${live ? 'car-live' : 'car-arrive'}`} style={live ? { '--progress': progress } : undefined}>🚕</div>
    </section>
  );
}
