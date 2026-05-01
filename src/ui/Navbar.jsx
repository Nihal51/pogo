import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='nav'>
      <span className='brand'>DB</span>
      <nav>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/booking'>Booking</NavLink>
        <NavLink to='/tracking'>Tracking</NavLink>
      </nav>
    </header>
  );
}
