import SAIC from '../assets/874px-SAIC_Logo.png'
import UCI from '../assets/uci3.png'
import snap from '../assets/snap.png'
import { Link } from "react-router-dom";
import React from "react";



function WorkExperience() {
    return (
        <div>
            <div id="experience" className="button-container flex flex-row justify-center mt-10">
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
            <div id="jobs" className="flex flex-row justify-between items-center min-h-screen">
                <div id="left" className="flex flex-col items-center max-w-5xl  flex-1 h-[1000px] mt-10">
                <div className="nes-container is-dark with-title">
                    <p className="title">Full Stack Software Engineer - Snap, Inc.</p>
                        <img src={snap} className="block mx-auto w-[20%] mb-5" alt="snap Icon" draggable={false} />
                        <ul className="text-center text-yellow-400">July 2025 - Present</ul>
                        <div className="mt-2 text-center">
                        I currently work as a <span className="text-green-500">Software Engineer</span> on the <span className="text-green-500">Web Platform team at Snap, Inc</span>.
                        My responsibilities revolve around creating new and improved features for customer facing experiences such as Snap.com, Snapchat for Business, and other web properties.
                        </div>
                    </div>
                    <div className="mt-10"></div>
                    <div class="nes-container is-dark with-title">
                        <p class="title">Multimedia & Game Programming Intern - SAIC</p>
                        <img src={SAIC} className="block mx-auto w-[35%] mb-5" alt="SAIC Icon" draggable={false}/>
                        <ul className="text-center text-yellow-400">June 2023 - August 2023</ul>
                        <div className="mt-2 text-center">
                            I contributed extensively to the development of a    
                            <span className="text-green-500"> multiplayer war-game</span> tailored for the U.S government.
                            My primary responsibility revolved around integrating simulations 
                            of military assets into the game's framework.
                        </div>
                    </div>
                </div>
                <div id="right" className="flex flex-col justify-start items-center max-w-5xl h-[1000px] flex-1 mt-10">
                    <div class="nes-container is-dark with-title">
                        <p class="title">Software Engineer Apprentice- Snap, Inc.</p>
                        <img src={snap} className="block mx-auto w-[20%] mb-5" alt="snap Icon" draggable={false} />
                        <ul className="text-center text-yellow-400">August 2024 - June 2025</ul>
                        <div className="mt-2 text-center">
                        Previously, I worked as a <span className="text-green-500">Software Engineer Apprentice</span> on both the <span className="text-green-500">Ads Manager and Inference Platform teams at Snap, Inc</span>.
                        </div>
                    </div>
                    <div className="mt-10"></div>
                    <div class="nes-container is-dark with-title">
                        <p class="title">Head Undergrad Teaching Assistant - UCI</p>
                        <img src={UCI} className="block mx-auto w-[15%] mb-5" alt="UCI Icon" draggable={false}/>
                        <ul className="text-center text-yellow-400">January 2022 - January 2024</ul>
                        <div className="mt-2 text-center">
                            I worked as the <span className="text-green-500">Head Undergrad TA for the  
                            Data Structures & Algorithms</span> courses at my university. 
                            My contribution extended beyond the conventional  
                            responsibilities, delving into the restructuring of  
                            lesson plans, assignments, and exam materials. 
                            </div>
                    </div>
                </div>
                </div>
        </div>

);
}

export default WorkExperience;