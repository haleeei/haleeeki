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

      <div className="nes-container is-dark nes-box">
        <h1 className="nes-text is-normal text-center">
          <p className="note-text press-start-2p-regular">
            NOTE:
            <br />
            Please open on a desktop
            <br />
            or laptop computer for the
            <br />
            best viewing experience.
            <br />
            <br />
          </p>
        </h1>

        <div className="action-wrapper nes-text is-primary">
          <p className="action-text press-start-2p-regular">
            Click here to begin.
          </p>

          <Link to="/aboutme">
            <button
              className="nes-btn is-primary text-white button"
              onClick={playClick}
            >
              {">"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;