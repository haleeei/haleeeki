import { Link } from "react-router-dom";
import { usePlayClickSound } from "./utils";

import "nes.css/css/nes.min.css";
import "./home.css";

function Home() {
  const playClick = usePlayClickSound();

  return (
    <div id="home">
      
      {/* Header */}
      <div className="header-wrapper">
        <p className="title bit-title-font">
          Haley Inzunza's
          <br />
          Portfolio Website
        </p>
      </div>
      <h1 className="note-text press-start-2p-bold">
        Best experienced on desktop, fully accessible on mobile.
      </h1>
      <div className="action-wrapper nes-text is-primary">
        <Link to="/aboutme">
          <button
            className="nes-btn is-warning text-white button"
            onClick={playClick}
          >
            {"Enter Portfolio"}
          </button>
        </Link> 
      </div>
    </div>
  );
}

export default Home;