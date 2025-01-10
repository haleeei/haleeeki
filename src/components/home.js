/*import pfp from '../assets/haleeei.png'
import resume from '../assets/Inzunza_Haley_2025_Resume.pdf'

import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";



function Home () {
  return (
    <div id = "home" className="flex flex-col justify-center items-center w-full scroll-mt-28">
      <div className="text-[#22610B] text-9xl font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-5">
        <p>Haley Khuu Inzunza</p>
        <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
      </div>
      <div className='flex flex-row items-center justify-center gap-10 mt-5 '>
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
            creating innovative solutions, I  thrive on challenges and 
            <br/>
            explore new technologies to push the boundaries of what’s
            <br/>
            possible. When I'm not building software or learning new 
            <br />
            technologies, I enjoy playing video games and volleyball,
            <br />
            drawing and painting, film photography, and snowboarding.
        </div>

        <div className="flex flex-row justify-center items-center mt-2 gap-7">
          <a href="https://github.com/haleeei">
                <FiGithub size={60} className='text-black active:text-gray-600 hover:scale-105 transition '/ >
          </a>
          <a href="https://www.linkedin.com/in/haley-inzunza-76033914a/">
                <FaLinkedin size={60} className='text-black active:text-gray-600 hover:scale-105 transition '/>
          </a>
          <a href={resume}>
                <HiOutlineNewspaper size={80} className='text-black active:text-gray-600 hover:scale-105 transition '/>
          </a>
        </div>
      </div>
      </div> 
      <Link to="/" onClick={() => {
          let exp = document.getElementById("experience");
          exp && exp.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        <SlArrowDown size={60} className='text-green-900 mt-4 transition animate-bounce' />
      </Link>

    </div>
  );
}

export default Home;*/

import pfp from '../assets/haley.jpg';
import resume from '../assets/Inzunza_Haley_2025_Resume.pdf';

import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

import "nes.css/css/nes.min.css"
// Content as a JSON object for reusability
const content = {
  name: "Haley Khuu Inzunza",
  bio: [
    "Hi! I'm Haley Inzunza, a software developer. I  currently work as a junior", 
    "backend software engineer at Snap, Inc. and graduated with a degree in",
    "Computer Science from UC Irvine in December of 2023. I have various technical",
    "interests in domains like AI, Computer Vision, and Game Development. When ",
    "I'm not building software or learning new technologies, I enjoy playing video",
    "games, knitting, drawing and painting, film photography, and snowboarding.",
  ],
  socialLinks: [
    { icon: <FiGithub size={60} />, href: "https://github.com/haleeei", alt: "GitHub" },
    { icon: <FaLinkedin size={60} />, href: "https://www.linkedin.com/in/haley-inzunza-76033914a/", alt: "LinkedIn" },
    { icon: <HiOutlineNewspaper size={80} />, href: resume, alt: "Resume" },
  ],
};

function Home() {
  return (
    <div id="home" className="flex flex-col justify-center items-center w-full h-screen">
      {/* Header */}
      <div className="flex flex-col justify-center items-center text-black text-8xl">
        <p className="bit-title-font text-center">
          Haley Inzunza's
          <br/>
          Portfolio Website
        </p>
      </div>

      <div className="nes-container is-dark">
        <h1 className="nes-text is-normal text-center text-2xl"> 
          <p className="press-start-2p-regular text-center">
          NOTE:
          <br/>
          Please open on a desktop 
          <br/> 
          or laptop computer for the
          <br/>
          best viewing experience.
          <br/>
          <br/>
          </p>
        </h1>
        <div className= "nes-text is-primary text-center">
          <p className="press-start-2p-regular text-center">
            Click here to begin.
          </p>
          <Link to="/experience">
            <button className="nes-btn is-primary text-white center">  
              >
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;