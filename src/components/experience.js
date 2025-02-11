
/*import SAIC from '../assets/874px-SAIC_Logo.png'
import UCI from '../assets/uci3.png'
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";



function Experience() {

    return (
        <div id = "experience" className="flex flex-col justify-center items-center mt-48">
            <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
                <p>Employment Experience</p>
                <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
            </div>
            <div className='flex items-center justify-center gap-10 mt-8'>
                    <div className=''>
                        <div className='flex flex-row items-center justify-center gap-10 mt-8 '>
                            <img src={SAIC} className="w-[25%] hover:scale-105 transition" alt="SAIC Icon" draggable={false}/>
                            <div className=" text-2xl text-left leading-relaxed font-UnbuntoMono bg-[#DFF9D8] border-8 border-double border-green-900 p-5 rounded-xl shadow-2xl">
                                <strong>VISUALIZATION INTERN - MULTIMEDIA & GAME PROGRAMMING</strong>
                                <br/>
                                <em>June 2023 - August 2023</em>
                                <br/>
                                Here I contributed extensively to the development of a    
                                <br />
                                multiplayer war-game tailored for the U.S. Space Force.
                                <br/>
                                My primary responsibility revolved around pioneering a                                  
                                <br />
                                cutting-edge pipeline, seamlessly integrating simulations 
                                <br/>
                                of military assets into the game's framework. Our team 
                                <br/>
                                achieved a groundbreaking milestone by successfully 
                                <br />
                                executing this approach and presented our findings and
                                <br/>
                                final project to our U.S. Space Force customers.
                                <div className='flex flex-row items-center justify-center gap-4'>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-green-900 border-2 border-green-900 rounded-xl">
                                        C++
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-green-900 border-2 border-green-900 rounded-xl">
                                        Unreal Engine
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-green-900 border-2 border-green-900 rounded-xl">
                                        Gitlab
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-green-900 border-2 border-green-900 rounded-xl">
                                        MATLAB
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                        <div className='flex flex-row items-center justify-center gap-10 mt-16'>
                        <div className=" text-2xl text-left leading-relaxed font-UnbuntoMono bg-[#F7D999] border-8 border-double border-[#f66d1b] p-5 rounded-xl shadow-2xl">
                                <strong> HEAD UNDERGRADUATE TA - DATA STRUCTURES & ALGORITHMS</strong>
                                <br/>
                                <em>January 2022 - January 2024</em>
                                <br/>
                                Here I worked as the Head Undergraduate TA for the  
                                <br/>
                                Data Structures & Algorithms courses at my university. 
                                <br/>
                                As the first undergraduate teaching assistant, I played 
                                <br/>
                                a pivotal role in shaping the foundation of the class.
                                <br/>
                                My contribution extended beyond the conventional  
                                <br/>
                                responsibilities, delving into the restructuring of  
                                <br/>
                                lesson plans, homework assignments, and exam materials. 
                                <br/> 
                                Hosting targeted test review sessions became a cornerstone 
                                <br/>
                                of my approach, catering to students striving to excel 
                                <br/>
                                academically.
                                <div className='flex flex-row items-center justify-center gap-4'>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                                        C++
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                                        Valgrind
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                                        Git
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                                        Teaching
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                                        Leadership
                                    </div>
                                </div>
                             </div>
                            <img src={UCI} className="w-[25%] hover:scale-105 transition" alt="UCI Icon" draggable={false}/>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-10 mt-16'>
                            <img src={UCI} className="w-[25%] hover:scale-105 transition" alt="UCI Icon" draggable={false}/>
                            <div className=" text-2xl text-left leading-relaxed font-UnbuntoMono bg-[#DFF9D8] border-8 border-double border-green-900 p-5 rounded-xl shadow-2xl">
                                <strong>UNDERGRADUATE TA - DESIGN & ANALYSIS OF ALGORITHMS</strong>
                                <br/>
                                <em>January 2023 - January 2024</em>
                                <br/>
                                Here I worked as an Undergraduate TA for the Design 
                                <br/>
                                & Analysis of Algorithms courses at my university. I
                                <br/>
                                taught students how to analyze algorithms for 
                                <br/>
                                time and space optimization, and identify and design 
                                <br/>
                                advanced divide-and-conquer, dynamic programming, and  
                                <br/>
                                greedy algorithms. Additionally, I hosted office hours to 
                                <br/>
                                help students reach their academic objectives and 
                                <br/>
                                graded both exams and homework for classes of 250+ people.
                                <div className='flex flex-row items-center justify-center gap-4'>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-green-900 border-2 border-green-900 rounded-xl">
                                        C++
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-green-900 border-2 border-green-900 rounded-xl">
                                        Teaching
                                    </div>
                                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-green-900 border-2 border-green-900 rounded-xl">
                                        Leadership
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                <Link to="/" onClick={() => {
                    let exp = document.getElementById("skills");
                    exp && exp.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    <SlArrowDown size={60} className='text-green-900 mt-4 transition animate-bounce' />
                </Link>
            </div>
);
}

export default Experience;*/

import React, { useState } from "react";
import SAIC from '../assets/874px-SAIC_Logo.png';
import SNAP from '../assets/file.png';
import UCI from '../assets/uci3.png';
import TrapezoidTitleBarLeft from './TrapezoidTitleBarLeft';
import TrapezoidTitleBarRight from './TrapezoidTitleBarRight';
import HXLOZ from '../assets/hxloz.gif';
import resume from '../assets/Inzunza_Haley_2025_Resume.pdf';
import programming from '../assets/programming.png'
import technology from '../assets/technology.png'
const about_selections = [
    {
        title: "My Programming Languages",
        subtitle: "Other Languages",
        image: programming, // Image is included
        data: ["MIPS Assembly", "C#", "Javascript"]
    }, 
    {
        title: "My Technologies",
        subtitle: "Other Technologies",
        image: technology,
        data: ["Unity Engine", "Jupyter Notebook","FMOD Studio"]
    }, 
    {
        title: "About Me",
        description:  "Hi! I'm Haley Inzunza. I currently work as a junior backend software engineer at Snap, Inc. and graduated with a degree in Computer Science from UC Irvine in December of 2023. I have various technical interests in domains like AI, Computer Vision, and Game Development. When I'm not building software or learning new technologies, I enjoy playing video games, knitting, drawing and painting, film photography, and snowboarding.",
        subtitle: "Extras"
    },

];

function Experience() {
    const [currentSelectionIndex, setCurrentSelectionIndex] = useState(0);
    const handleSelection = () => {
        setCurrentSelectionIndex((prevIndex) => (prevIndex + 1) % about_selections.length); 
    };

    const currentSelection = about_selections[currentSelectionIndex];

    return (
        <div id="experience" className="flex flex-row justify-between items-center min-h-screen">
            <div id="left" className="flex flex-col items-center w-full max-w-5xl  flex-1 h-[1000px]"> {/* Use flex-1 to ensure equal height */}
                <div id='left-title-bar' className="w-full max-w-5xl  ">
                    <TrapezoidTitleBarRight 
                            title={currentSelection.title}>
                                <button className="title-button" onClick={handleSelection}>
                                    >
                                </button>
                            </TrapezoidTitleBarRight>
                </div>
                <div id="left-contents" className="flex flex-col justify-evenly items-center h-full w-full">
                    {/* Description and Button Container */}
                    <div 
                        className="description-container w-full h-full p-4 rounded flex flex-col items-center justify-center" 
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.65)",
                            marginTop: "-5px", // Adjust this based on your TrapezoidTitleBarRight spacing
                            borderTopLeftRadius: "0", 
                            borderTopRightRadius: "0",
                        }}
                    >
                        {currentSelection.description && (
                            <p className="text-black text-lg text-center mb-4">
                                {currentSelection.description}
                            </p>
                        )}

                        {/* Optional Image */}
                        {currentSelection.image && (
                            <img src={currentSelection.image} alt={currentSelection.title} width={"800px"} className="mb-4" />
                        )}

                        <div id='sub-title-left'>
                            <TrapezoidTitleBarRight
                                title={currentSelection.subtitle}
                            />
                        </div>

                        {/* Button */}
                        {currentSelection.title === "About Me" && (
                            <div className="flex justify-center mt-4">
                                <button className="nes-btn is-success text-white">
                                    Fun hobbies!
                                </button>
                            </div>
                        )}

                        {currentSelection.data && (
                            <div className= "text-black text-lg">
                                <ul className="nes-list is-disc">
                                    {currentSelection.data.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ) )}
                                </ul>
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
                    <a href={resume}>
                        <button className="nes-btn is-error ">  
                            RESUME
                        </button>
                    </a>
                </div>
                <img src={HXLOZ} alt="HXLOZ Icon" draggable={false} className="mt-20"/>
            </div>
        </div>
    );
}

export default Experience;