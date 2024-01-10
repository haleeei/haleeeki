import { SlArrowDown } from "react-icons/sl";


function Moreabout(){
    return(      
        <div className="flex flex-col justify-center items-center w-full mt-8">
                <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
                    <p>More About Me</p>
                    <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
                </div>

                <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3 ">
                    I've recently taken up film photography as a hobby. 
                    <br/> 
                    Currently shooting on either a Canon A1, Samsung Maxima 
                    <br/>
                    Zoom 70GL, or Kodak Sport Waterproof Single-Use at
                    <br/>
                    any given moment. Some shots I've taken:
                </div>
            <div className="flex flex-col justify-center items-center w-full mt-8">
                <SlArrowDown size={60} className='text-green-900 mt-8 transition animate-bounce' />
            </div>
        </div>


    );
}

export default Moreabout;