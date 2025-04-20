import React, { useState } from "react";
import TrapezoidTitleBarLeft from './TrapezoidTitleBarLeft';
import TrapezoidTitleBarRight from './TrapezoidTitleBarRight';
import HXLOZ from '../assets/hxloz.gif';
import programming from '../assets/programming.png'
import technology from '../assets/technology.png'
import { Link } from "react-router-dom";
const about_selections = [
    {
        title: "About Me",
        description: (
            <>
              Hi! I'm Haley Inzunza. I currently work as a <span className="text-blue-500">junior full stack software engineer</span> at <span className="text-blue-500">Snap, Inc. 
              <span className="text-2xl">👻</span></span> on the Ads Manager platform. I graduated with a degree in 
              <span className="text-blue-500"> Computer Science</span> from <span className="text-blue-500">UC Irvine</span> in December of 2023. I have various technical interests in domains like 
              <span className="text-blue-500"> AI, Computer Vision, and Game Development</span>.
            </>
          ),
        subtitle: "Extras"
    },
    {
        title: "My Programming Languages",
        subtitle: "Other Languages",
        image: programming, 
        data: "MIPS Assembly | C# | Javascript | HTML",
        data: (
            <>
            MIPS Assembly - C# - Javascript - HTML
            </>
        )
    }, 
    {
        title: "My Technologies",
        subtitle: "Other Technologies",
        image: technology,
        data: (
            <>
            Unity Engine - Jupyter Notebook - FMOD Studio
            </>
        )
    }, 
];

function AboutMe() {
    const [currentSelectionIndex, setCurrentSelectionIndex] = useState(0);
    const handleSelection = () => {
        setCurrentSelectionIndex((prevIndex) => (prevIndex + 1) % about_selections.length); 
    };

    const currentSelection = about_selections[currentSelectionIndex];

    return (
        <div id="experience" className="flex flex-row justify-between items-center min-h-screen">
            <div id="left" className="flex flex-col items-center w-full max-w-5xl  flex-1 h-[1000px]"> {/* Use flex-1 to ensure equal height */}
                <div id="left-contents" className="flex flex-col justify-evenly items-center h-full w-full max-w-5xl">
                    {/* Description and Button Container */}
                    <div id='left-title-bar' className="w-full flex-shrink-0">
                    <TrapezoidTitleBarRight 
                        title={currentSelection.title}
                        textClass="title-text-right">
                        <button 
                            className="title-button button-animate" 
                            onClick={handleSelection}
                        >
                            >
                        </button>
                    </TrapezoidTitleBarRight>
                    </div>
                    <div 
                        className="description-container w-full h-full p-4 rounded flex flex-col items-center" 
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.65)",
                            marginTop: "-5px", 
                            borderTopLeftRadius: "0", 
                            borderTopRightRadius: "0",
                        }}
                    >
                        {currentSelection.description && (
                            <div className="w-full flex justify-center">
                                <div style={{ maxWidth: '48rem' }}>
                                    <p className="text-black text-lg text-center mt-10 mb-10 leading-loose">
                                    {currentSelection.description}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Optional Image */}
                        {currentSelection.image && (
                            <img src={currentSelection.image} alt={currentSelection.title} width={"800px"} className="mb-4" />
                        )}

                        <div id='sub-title-left' className="w-screen flex justify-start">
                        <div className="w-full max-w-5xl">
                            <TrapezoidTitleBarRight 
                                title={currentSelection.subtitle}
                                textClass="sub-title-text-right"
                             />
                        </div>
                        </div>

                        {/* Button */}
                        {currentSelection.title === "About Me" && (
                            <>
                                <div className="flex justify-center">
                                    <p className="text-black text-lg text-center mt-10 mb-10 leading-loose">
                                    When I'm not building software or learning new technologies, 
                                    I enjoy playing <span className="text-green-500">video games, knitting, drawing</span> and <span className="text-green-500">painting, film photography,</span> and <span className="text-green-500">snowboarding</span>.
                                    </p>
                                </div>
                            </>
                        )}

                        {currentSelection.data && (
                            <div className="w-full flex justify-center">
                                <div style={{ maxWidth: '48rem' }}>
                                    <p className="text-black text-lg text-center mt-10 mb-10 leading-loose">
                                    {currentSelection.data}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                            
            </div>
            <div id="right" className="flex flex-col justify-start items-center w-full max-w-5xl h-[1000px] flex-1"> {/* Use flex-1 to ensure equal height */}
                <TrapezoidTitleBarLeft title="Haley Inzunza" />
                <div id="socials" className="socials-spacing">
                    <a href="https://github.com/haleeei">
                        <i className="nes-icon github is-large"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/haley-inzunza-76033914a/">
                        <i className="nes-icon linkedin is-large"></i>
                    </a>
                    <a href="/Inzunza_Haley_2025_Resume1.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="nes-btn is-error">  
                            RESUME
                        </button>
                    </a>
                </div>
                <img src={HXLOZ} alt="HXLOZ Icon" draggable={false} className="mt-20"/>
                <Link to="/experience">
                    <button className="nes-btn is-warning text-white center">  
                    Work Experience
                    </button>
                </Link>
                <div className="mt-10">
                    <Link to="/projects">
                        <button className="nes-btn is-warning text-white center">  
                        Personal Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;