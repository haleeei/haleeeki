
import SAIC from '../assets/874px-SAIC_Logo.png'
import UCI from '../assets/uci3.png'
import { SlArrowDown } from "react-icons/sl";




function Experience() {
    /*const divStyle = {
        backgroundColor: 'rgba(34, 97, 11)', // Set your desired green color here
        // You can use specific shades like 'rgba(34, 97, 11, 0.5)' for transparency
    };*/

    return (
        /* <div style={divStyle}>
            {/* Your component content goes here }*/
        <div className="flex flex-col justify-center items-center mt-48">
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
                <SlArrowDown size={60} className='text-green-900 mt-8 transition animate-bounce'/>
            </div>
);
}

export default Experience;