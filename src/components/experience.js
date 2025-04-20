import SAIC from '../assets/874px-SAIC_Logo.png'
import UCI from '../assets/uci3.png'
import snap from '../assets/snap.png'
import { Link } from "react-router-dom";



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
                    <p className="title">Junior Full Stack Software Engineer - Snap, Inc.</p>
                        <img src={snap} className="block mx-auto w-[20%] mb-5" alt="snap Icon" draggable={false} />
                        <ul className="text-center text-yellow-400">February 2025 - Present</ul>
                        <div className="mt-2 text-center">
                        I currently work as a Software Engineer Apprentice on the Ads Manager team at Snap, Inc.
                        My responsibilities revolve around enhancing event tracking systems to improve advertiser performance analysis and campaign optimization.
                        </div>
                    </div>
                    <div className="mt-10"></div>
                    <div class="nes-container is-dark with-title">
                        <p class="title">Multimedia & Game Programming Intern - SAIC</p>
                        <img src={SAIC} className="block mx-auto w-[35%] mb-5" alt="SAIC Icon" draggable={false}/>
                        <ul className="text-center text-yellow-400">June 2023 - August 2023</ul>
                        <div className="mt-2 text-center">
                            I contributed extensively to the development of a    
                            multiplayer war-game tailored for the U.S government.
                            My primary responsibility revolved around integrating simulations 
                            of military assets into the game's framework.
                        </div>
                    </div>
                </div>
                <div id="right" className="flex flex-col justify-start items-center max-w-5xl h-[1000px] flex-1 mt-10">
                    <div class="nes-container is-dark with-title">
                        <p class="title">Junior Backend Software Engineer - Snap, Inc.</p>
                        <img src={snap} className="block mx-auto w-[20%] mb-5" alt="snap Icon" draggable={false} />
                        <ul className="text-center text-yellow-400">February 2025 - Present</ul>
                        <div className="mt-2 text-center">
                        Previously, I worked as a Software Engineer Apprentice on the Inference Platform team at Snap, Inc.
                        I contributed to improving observability within ML pipelines powering ad and feed ranking, and the MyAI chatbot.
                        </div>
                    </div>
                    <div className="mt-10"></div>
                    <div class="nes-container is-dark with-title">
                        <p class="title">Head Undergrad Teaching Assistant - UCI</p>
                        <img src={UCI} className="block mx-auto w-[15%] mb-5" alt="UCI Icon" draggable={false}/>
                        <ul className="text-center text-yellow-400">January 2022 - January 2024</ul>
                        <div className="mt-2 text-center">
                            I worked as the Head Undergrad TA for the  
                            Data Structures & Algorithms courses at my university. 
                            My contribution extended beyond the conventional  
                            responsibilities, delving into the restructuring of  
                            lesson plans, assignments, and exam materials. 
                            </div>
                    </div>
                </div>
                </div>
        </div>
        /*<div id = "experience" className="flex flex-col justify-center items-center mt-48">
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
            </div>*/
);
}

export default WorkExperience;