import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [toggle, SetToggle] = useState(false);

  return(
    <>
    <nav>
      <h2>VG Nair</h2>

      <ul className="nav-menus">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
    
      <button className="toggle-btn"
              onClick={() => SetToggle(!toggle)}>
        {toggle ? "✕" : "☰"}
      </button>

    </nav>  

      {toggle && (
        <div className="toggle-menu">
          <ul>
            <li><Link className="nav-link" to="/" onClick={() => SetToggle(false)}>Home</Link></li>
            <li><Link className="nav-link" to="/about" onClick={() => SetToggle(false)}>About</Link></li>
            <li><Link className="nav-link" to="/contact" onClick={() => SetToggle(false)}>Contact</Link></li>
          </ul>        
        </div>
      )}

    </>
  );
}

export default Navbar;