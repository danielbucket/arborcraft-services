import { StyledHeader } from './header.styled.js';
import { Link } from 'react-router';
import Logo from './arborcraft.png';

export default function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="ArborCraft Logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/prices">Prices</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </StyledHeader>
  );
};