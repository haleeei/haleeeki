import map from '../assets/map8bit.png'
import { Link } from "react-router-dom";
import React from "react";



const viewportFullWidth = {
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
};

function WorkExperience() {
    return (
        <div
            className="flex min-h-screen w-full flex-col pb-8"
            style={viewportFullWidth}
        >
            <div
                id="experience"
                className="button-container mt-10 flex shrink-0 flex-row justify-center"
            >
                <Link to="/aboutme">
                    <button className="nes-btn is-warning text-white center">  
                    About Me
                    </button>
                </Link>
                <Link to="/projects">
                    <button className="nes-btn is-warning text-white center">  
                    Personal Projects
                    </button>
                </Link>
            </div>
            <div className="min-h-0 w-full flex-1 basis-0 overflow-hidden pt-2">
                <img
                    src={map}
                    alt="8-bit map"
                    className="block h-full min-h-0 w-full max-w-full origin-center scale-x-[1.56] scale-y-[1.16] object-contain [image-rendering:pixelated]"
                />
            </div>
        </div>

);
}

export default WorkExperience;