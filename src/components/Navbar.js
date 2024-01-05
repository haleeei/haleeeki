import { FaHome } from 'react-icons/fa'; // Import the desired icon


function Navbar() {
  return (
    <div className="fixed w-[100%] h-16 bg-green-900 border-b-2 border-black top-0 flex items-center justify-between"> 
      <a href="/home" className="text-white w-[5%] text-[2rem] font-Poppins font-md"><FaHome/></a>
      <div className='w-[40%] flex justify-between'>
        <a href="/education" className="text-white w-[10%] text-md ">Education</a>
        <a href="/experience" className="text-white w-[10%] text-md">Experience</a>
        <a href="/projects" className="text-white w-[10%] text-md ">Projects</a>
        <a href="/contact" className="text-white w-[10%] text-md">Contact</a>

      </div>
     
      
    </div>
  );
}

export default Navbar;