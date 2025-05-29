import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <div>
        <nav>
          <p>ArborCraft Services Main</p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};