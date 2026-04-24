import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar-wrapper">
      <div className="nes-container is-dark">
      <div id="navbar">

{/* LEFT: NAV LINKS */}
<div className="nav-left">
  <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
  <Link to="/aboutme" className={`nav-item ${location.pathname === "/aboutme" ? "active" : ""}`}>About Me</Link>
  <Link to="/experience" className={`nav-item ${location.pathname === "/experience" ? "active" : ""}`}>Work Experience</Link>
  <Link to="/projects" className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}>Personal Projects</Link>
</div>

{/* RIGHT: SOCIALS */}
<div id="socials">
  <a href="https://github.com/haleeei">
    <i className="nes-icon github is-medium"></i>
  </a>
  <a href="https://www.linkedin.com/in/haley-inzunza-76033914a/">
    <i className="nes-icon linkedin is-medium"></i>
  </a>
  <a href="/Inzunza_Haley_2026_Resume.pdf" target="_blank" rel="noopener noreferrer">
    <button className="nes-btn is-error">Resume</button>
  </a>
</div>

</div>
      </div>
    </div>
  );
}

export default Navbar;