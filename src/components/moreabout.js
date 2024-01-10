import { SlArrowDown } from "react-icons/sl";

function Moreabout(){
    return(
        <div className="flex flex-col justify-center items-center mt-48">
            <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
                <p>More About Me</p>
                <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
            </div>
            <SlArrowDown size={60} className='text-green-900 mt-8 transition animate-bounce'/>
        </div>


    );
}

export default Moreabout;