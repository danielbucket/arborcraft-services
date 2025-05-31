import { StyledHeader } from './header.styled.js';
import { Link } from 'react-router';

export default function Header() {

  return (
    <StyledHeader>
      <div>
        <h1>ArborCraft Services</h1>
        <p>Your trusted partner in tree care and home maintenance.</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </StyledHeader>
  );
};