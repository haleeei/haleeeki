
import SAIC from '../assets/874px-SAIC_Logo.png'
import UCI from '../assets/uci2.png'



function Experience() {
    /*const divStyle = {
        backgroundColor: 'rgba(34, 97, 11)', // Set your desired green color here
        // You can use specific shades like 'rgba(34, 97, 11, 0.5)' for transparency
    };*/

    return (
        /* <div style={divStyle}>
            {/* Your component content goes here }*/
        <div className="flex flex-col justify-center items-center">
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
                             </div>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-10 mt-8'>
                            <div className="text-2xl text-left leading-relaxed font-UnbuntoMono">
                                <strong> HEAD UNDERGRADUATE TA - DATA STRUCTURES & ALGORITHMS</strong>
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

                             </div>
                            <img src={UCI} className="w-[25%] hover:scale-105 transition" alt="UCI Icon" draggable={false}/>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-10 mt-8'>
                            <img src={UCI} className="w-[25%] hover:scale-105 transition" alt="UCI Icon" draggable={false}/>
                            <div className="text-2xl text-left leading-relaxed font-UnbuntoMono">
                                <strong>UNDERGRADUATE TA - DESIGN & ANALYSIS OF ALGORITHMS</strong>
                                <br/>
                                Here I worked as an Undergraduate TA for the Design 
                                <br/>
                                & Analysis of Algorithms courses at my university. I
                                <br/>
                                taught students how to analyze algorithms for 
                                <br/>
                                optimization, and identify and design  advanced 
                                <br/>
                                divide-and-conquer, dynamic programming, and greedy 
                                <br/>
                                algorithms. Additionally, I hosted office hours to 
                                <br/>
                                help students reach their academic objectives and 
                                <br/>
                                graded both exams and homework for classes of 250+ people.
                             </div>
                        </div>
                    </div>
                </div>
            </div>
);
}

export default Experience;