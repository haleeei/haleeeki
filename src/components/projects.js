import { SlArrowDown } from "react-icons/sl";
import meshgen from '../assets/meshgenerator.gif'
import compagnie from '../assets/WeGotCompagnie.gif'

function Projects(){
    return (
        <div className="flex flex-col justify-center items-center mt-48">
            <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
                <p>Personal Projects</p>
                <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
            </div>
            <div className="mt-16 text-5xl text-center leading-relaxed font-UnbuntoMono">
                <strong>3D Mesh Generator</strong>
            </div>
            <img src={meshgen} className="w-[55%] hover:scale-105 transition border-8 border-black rounded-xl" alt="Mesh Generator gif" draggable={false}/>
            <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-5 ">
                Takes in a collection of structured light scans of an 
                <br/> 
                object or person at different angles and produces a 
                <br/>
                single rotatable 3D mesh reconstruction of the subject.
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Python
                    </div>
                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        NumPy
                    </div>
                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Matplotlib
                    </div>
                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Jupyter Notebook
                    </div>
                    <div className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        MeshLab
                    </div>
            </div>
            <div className="mt-16 text-5xl text-center leading-relaxed font-UnbuntoMono">
                <strong>We Got Compagnie!</strong>
            </div>
            <img src={compagnie} className="w-[55%] hover:scale-105 transition border-8 border-black rounded-xl" alt="Mesh Generator gif" draggable={false}/>


        </div>

    );
}
export default Projects;