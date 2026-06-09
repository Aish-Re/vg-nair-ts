import { Link } from "react-router-dom";

function Navbar() {
  return(
    <nav>
      <h2>VG Nair</h2>

      <ul>
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
    </nav>  
  );
}

export default Navbar;