import { SlArrowDown } from "react-icons/sl";
import { skillsData } from "../lib/data";

function Skills(){
    return(
        <div className="flex flex-col justify-center items-center mt-48">
            <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-8">
                <p>Technical Skills</p>
                <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
                <section className=' max-w-[53rem] scroll-mt-28 '>
                <ul className='flex flex-wrap justify-center gap-3 text-lg'>
                    {
                        skillsData.map((skill, index) => (
                            <li 
                                className='text-[#DFF9D8] text-3xl text-left leading-relaxed font-UnbuntoMono 
                                px-4 py-1 mt-4 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl hover:scale-105 transition cursor-default'
                                key={index}
                                >{skill}
                            </li>
                        ))
                    }
                </ul>
            </section>
            </div>
                <SlArrowDown size={60} className='text-green-900 mt-8 transition animate-bounce'/>
            </div>

    );
}

export default Skills;