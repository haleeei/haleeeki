import { Link } from "react-router-dom";

import "nes.css/css/nes.min.css"

function Home() {
  return (
    <div id="home" className="flex flex-col justify-center items-center w-full h-screen">
      {/* Header */}
      <div className="flex flex-col justify-center items-center text-black text-8xl">
        <p className="bit-title-font text-center">
          Haley Inzunza's
          <br/>
          Portfolio Website
        </p>
      </div>

      <div className="nes-container is-dark">
        <h1 className="nes-text is-normal text-center text-2xl"> 
          <p className="press-start-2p-regular text-center">
          NOTE:
          <br/>
          Please open on a desktop 
          <br/> 
          or laptop computer for the
          <br/>
          best viewing experience.
          <br/>
          <br/>
          </p>
        </h1>
        <div className= "nes-text is-primary text-center">
          <p className="press-start-2p-regular text-center">
            Click here to begin.
          </p>
          <Link to="/aboutme">
            <button className="nes-btn is-primary text-white center">  
              >
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;