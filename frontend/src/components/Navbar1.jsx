import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar1 = () => {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <div className="navbar-logo">
          MOON
        </div>

        <div className="navbar-btns-container">
          <div className="navbar-btns">
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#why">Why Moon</a></li>
              <li>
                <Link to="/signup" className="signup" id="signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;