import { Link } from 'solid-app-router';
import './style.css';

function Header() {
  return (
    <header>
      <Link href="">Home</Link>

      <nav>
        <ul>
          <Link href="/about">About</Link>
        </ul>
      </nav>
    </header>
  ); 
}

export default Header;
