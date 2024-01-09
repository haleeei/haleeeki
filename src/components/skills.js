import { SlArrowDown } from "react-icons/sl";

function Skills(){
    return(
        <div className="flex flex-col justify-center items-center mt-48">
            <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
                <p>Technical Skills</p>
                <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
                <div className='flex flex-row items-center justify-center gap-4 mt-8'>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        C++
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Python
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        C
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        C#
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        MIPS Assembly Language
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        HTML
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        CSS
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Tailwind
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        React
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Git
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Unreal Engine
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Unity Engine
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        MATLAB
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Matplotlib
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Numpy
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Jupyter Notebook
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Visual Studio
                    </div>
                    <div className="text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono p-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl">
                        Valgrind
                    </div>
                </div>
            </div>
            <SlArrowDown size={60} className='text-green-900 mt-8 transition animate-bounce'/>
        </div>

    );
}

export default Skills;