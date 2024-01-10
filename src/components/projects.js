import { SlArrowDown } from "react-icons/sl";
import meshgen from '../assets/meshgenerator.gif'
import detector from '../assets/detector.png'
import wordle from '../assets/wordle.png'
import { FiGithub } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";

function Projects(){
    return (
        <div className="flex flex-col justify-center items-center mt-48">
            <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
                <p>Personal Projects</p>
                <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
            </div>
            <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3 ">
                Check out the source code for my portfolio website here!
                <div className="flex flex-col justify-center items-center">
                    <a href="https://github.com/haleeei/haleeei.github.io">
                    {/* <img src={github} alt="GitHub icon"/> */}
                        <FiGithub size={50} className='text-[#f66d1b] active:text-black hover:scale-105 transition '/ >
                    </a>
                </div>
            </div>
            <div className="mt-16 text-5xl text-center leading-relaxed font-UnbuntoMono">
                <strong>3D Mesh Generator</strong>
            </div>
            <img src={meshgen} className="w-400 border-8 border-black rounded-xl" alt="Mesh Generator gif" draggable={false}/>
            <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3 ">
                Takes in a collection of structured light scans of an 
                <br/> 
                object or person at different angles and produces a 
                <br/>
                single rotatable 3D mesh reconstruction of the subject.
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Python
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    NumPy
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Matplotlib
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Jupyter Notebook
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    MeshLab
                </div>
            </div>
            <div className="mt-16 text-5xl text-center leading-relaxed font-UnbuntoMono">
                <strong>We Got Compagnie!</strong>
            </div>
            <div className="border-8 border-black rounded-xl">
                <iframe width="775" height="434" src="https://www.youtube.com/embed/QRIkhvTj6-4?si=tt__bVifpxvmfvOD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3 ">
                RPG fighting game. Winner of IEEE's 2023 Gamesig Student Showcase
                <br/> 
                Special Recognition Award for Most Innovative Audio and User 
                <br/>
                Interface and SGDA's Mini-grant for 2023's Student Games Showcase.
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    C++
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Unreal Engine
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    FMOD Studio
                </div>
                <a href="https://zxgnjason.itch.io/we-got-compagnie">
                <IoGameController size={60} className='text-[#22610B] active:text-gray-600 hover:scale-105 transition '/ >
                </a>
                <a href="https://github.com/GoodBreadStudios/WeGotCompagnie">
                <FiGithub size={60} className='text-[#22610B] active:text-gray-600 hover:scale-105 transition '/ >
                 </a>
            </div>
            <div className="mt-16 text-5xl text-center leading-relaxed font-UnbuntoMono">
                <strong>Minecraft Parkour AI</strong>
            </div>
            <div className="border-8 border-black rounded-xl">
                <iframe width="775" height="434" src="https://www.youtube.com/embed/AdDgQ5oNWB0?si=EPu245BdXAKJiNiO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3 ">
            AI program that creates an optimal path for a computer player 
            <br/>
            unit to traverse obstacle courses of varying difficulty in the 
            <br/>
            game Minecraft using reinforcement learning. 100% of courses 
            <br/>
            tested solved accurately.
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Python
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Malmo API
                </div>
            </div>
            <div className="mt-16 text-5xl text-center leading-relaxed font-UnbuntoMono">
                <strong>Object Detector</strong>
            </div>
            <img src={detector} className="w-[25%] border-8 border-black rounded-xl" alt="Object Detector" draggable={false}/>
            <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3 ">
            Given a collection of targets to identify, this program
            <br/>
            detects objects and faces in images with 70% accuracy.
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Python
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    NumPy
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Matplotlib
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Jupyter Notebook
                </div>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Gradient Features
                </div>
            </div>
            <div className="text-center text-[#DFF9D8] text-2xl leading-relaxed font-UnbuntoMono p-1 mt-3 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    Sliding Window Classification
            </div>
            <div className="mt-16 text-5xl text-center leading-relaxed font-UnbuntoMono">
                <strong>Wordle</strong>
            </div>
            <img src={wordle} className="w-[15%] border-8 border-black rounded-xl" alt="Wordle" draggable={false}/>
            <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3">
            Remake of <em>The New York Times</em> Wordle word game. Added
            <br/>
            hard mode where the player cannot reuse incorrect
            <br/>
            letters from previous guesses or the game ends.
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                    MIPS Assembly Language
                </div>
            </div>
            <SlArrowDown size={60} className='text-green-900 mt-8 transition animate-bounce'/>
            

        </div>

    );
}
export default Projects;