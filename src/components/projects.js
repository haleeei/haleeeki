/*import meshgen from '../assets/meshgenerator.gif'
import detector from '../assets/detector.png'
import wordle from '../assets/wordle.png'
import { FiGithub } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";

function Projects(){
    return (
        <div id = "projects" className="flex flex-col justify-center items-center mt-8">
            <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
                <p>Personal Projects</p>
                <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
            </div>
            <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3 ">
                Check out the source code for my portfolio website here!
                <div className="flex flex-col justify-center items-center">
                    <a href="https://github.com/haleeei/haleeeki">
                        <FiGithub size={50} className='text-[#f66d1b] active:text-black hover:scale-105 transition '/ >
                    </a>
                </div>
            </div>
            <div className="mt-16 text-5xl text-center leading-relaxed font-UnbuntoMono">
                <strong>3D Mesh Generator</strong>
            </div>
            <img src={meshgen} className="w-[50rem] border-8 border-black rounded-xl" alt="Mesh Generator gif" draggable={false}/>
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
            

        </div>

    );
}
export default Projects;*/

import meshgen from '../assets/meshgenerator.gif';
import detector from '../assets/detector.png';
import wordle from '../assets/wordle.png';
import { FiGithub } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";

// Project Data
const projects = [
  {
    title: "3D Mesh Generator",
    description: `Takes in a collection of structured light scans of an object or person at different angles 
                  and produces a single rotatable 3D mesh reconstruction of the subject.`,
    media: { type: "image", src: meshgen, alt: "Mesh Generator gif" },
    technologies: ["Python", "NumPy", "Matplotlib", "Jupyter Notebook", "MeshLab"],
    links: [],
  },
  {
    title: "We Got Compagnie!",
    description: `RPG fighting game. Winner of IEEE's 2023 Gamesig Student Showcase Special Recognition Award 
                  for Most Innovative Audio and User Interface and SGDA's Mini-grant for 2023's Student Games Showcase.`,
    media: { type: "video", src: "https://www.youtube.com/embed/QRIkhvTj6-4" },
    technologies: ["C++", "Unreal Engine", "FMOD Studio"],
    links: [
      { href: "https://zxgnjason.itch.io/we-got-compagnie", icon: <IoGameController size={60} /> },
      { href: "https://github.com/GoodBreadStudios/WeGotCompagnie", icon: <FiGithub size={60} /> },
    ],
  },
  {
    title: "Minecraft Parkour AI",
    description: `AI program that creates an optimal path for a computer player unit to traverse obstacle 
                  courses of varying difficulty in Minecraft using reinforcement learning. 100% of courses tested solved accurately.`,
    media: { type: "video", src: "https://www.youtube.com/embed/AdDgQ5oNWB0" },
    technologies: ["Python", "Malmo API"],
    links: [],
  },
  {
    title: "Object Detector",
    description: `Given a collection of targets to identify, this program detects objects and faces in images with 70% accuracy.`,
    media: { type: "image", src: detector, alt: "Object Detector" },
    technologies: ["Python", "NumPy", "Matplotlib", "Jupyter Notebook", "Gradient Features"],
    additionalTags: ["Sliding Window Classification"],
    links: [],
  },
  {
    title: "Wordle",
    description: `Remake of The New York Times Wordle word game. Added hard mode where the player cannot reuse 
                  incorrect letters from previous guesses or the game ends.`,
    media: { type: "image", src: wordle, alt: "Wordle" },
    technologies: ["MIPS Assembly Language"],
    links: [],
  },
];

function Projects() {
  return (
    <div id="projects" className="flex flex-col justify-center items-center mt-8">
      {/* Section Header */}
      <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
        <p>Personal Projects</p>
        <div className="w-[90%] h-[5px] bg-[#22610B] rounded-full" />
      </div>

      {/* GitHub Link */}
      <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3">
        Check out the source code for my portfolio website here!
        <div className="flex flex-col justify-center items-center">
          <a href="https://github.com/haleeei/haleeeki">
            <FiGithub size={50} className="text-[#f66d1b] active:text-black hover:scale-105 transition" />
          </a>
        </div>
      </div>

      {/* Project List */}
      {projects.map((project, index) => (
        <div key={index} className="mt-16">
          {/* Title */}
          <div className="text-5xl text-center leading-relaxed font-UnbuntoMono">
            <strong>{project.title}</strong>
          </div>

          {/* Media */}
          {project.media.type === "image" ? (
            <img
              src={project.media.src}
              alt={project.media.alt}
              className="w-[50rem] border-8 border-black rounded-xl"
              draggable={false}
            />
          ) : (
            <div className="border-8 border-black rounded-xl">
              <iframe
                width="775"
                height="434"
                src={project.media.src}
                title={`${project.title} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {/* Description */}
          <div className="text-3xl text-center leading-relaxed font-UnbuntoMono mt-3">
            {project.description}
          </div>

          {/* Technologies */}
          <div className="flex flex-row items-center justify-center gap-4">
            {project.technologies.map((tech, techIndex) => (
              <div
                key={techIndex}
                className="text-[#DFF9D8] text-2xl text-left leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl"
              >
                {tech}
              </div>
            ))}
            {project.additionalTags &&
              project.additionalTags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="text-center text-[#DFF9D8] text-2xl leading-relaxed font-UnbuntoMono p-1 bg-[#f66d1b] border-2 border-[#f66d1b] rounded-xl"
                >
                  {tag}
                </div>
              ))}
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div className="flex flex-row items-center justify-center gap-4 mt-4">
              {project.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href} className="hover:scale-105 transition">
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;