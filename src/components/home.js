import pfp from '../assets/haleeei.png'
import resume from '../assets/Inzunza_Haley_2024_Resume.pdf'

import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";

function Home () {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
        <p>Haley Khuu Inzunza</p>
        <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
      </div>
      <div className='flex flex-row items-center justify-center gap-10 mt-8'>
      <img src={pfp} className="w-[25%] hover:scale-105 transition" alt="Haley Icon" draggable={false}/>
      <div className=''>
        <div className="text-3xl mt-2 text-left leading-relaxed font-UnbuntoMono">
            Hi! I'm Haley Inzunza, a software developer. I graduated
            <br/>
            with a degree in Computer Science from UC Irvine this past
            <br/>
            December, where I delved into various technical domains like 
            <br/>
            AI, Computer Vision, and Game Development. Passionate about
            <br/>
            creating innovative solutions, I  thrive on challenges and explore
            <br/>
            explore new technologies to push the boundaries of what’s possible.
            <br/>
            When I'm not building software or learning new technologies,
            <br />
            I enjoy playing video games and volleyball, drawing and painting,
            <br />
            film photography, and snowboarding.
        </div>
        <div className="flex flex-row justify-center items-center mt-4 gap-7">
          <a href="https://github.com/haleeei">
              {/* <img src={github} alt="GitHub icon"/> */}
                <FiGithub size={80} className='text-black active:text-gray-600 hover:scale-105 transition '/ >
          </a>
          <a href="https://www.linkedin.com/in/haley-inzunza-76033914a/">
              {/* <img src={linkedIn} alt="Linkedin icon"/>*/}
                <FaLinkedin size={80} className='text-black active:text-gray-600 hover:scale-105 transition '/>
          </a>
          <a href={resume}>
              {/* <img src={resume} alt="Resume icon"/> */}
                <HiOutlineNewspaper size={90} className='text-black active:text-gray-600 hover:scale-105 transition '/>
          </a>
        </div>
      </div>
      </div> 
      <SlArrowDown size={60} className='text-green-900 mt-4 transition animate-bounce'/>

    </div>
  );
}

export default Home;