import meshgen from '../assets/personal-projects/meshgenerator.gif';
import detector from '../assets/personal-projects/detector.png';
import wordle from '../assets/personal-projects/wordle.png';
import { FiGithub } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";
import React, { useRef, useState } from 'react';

const projects = [
  { 
    title: "3D Mesh Generator", 
    description: (
      <>
      Takes in a collection of <span className="text-green-500">structured light scans</span> of an object or person at different angles 
      and produces a <span className="text-green-500">single rotatable 3D mesh reconstruction of the subject</span>.
    </>
  ), 
    media: { type: "image", src: meshgen, alt: "Mesh Generator gif" }, 
    technologies: ["Python", "NumPy", "Matplotlib", "Jupyter Notebook", "MeshLab"], 
    links: [] 
  },
  { 
    title: "Minecraft Parkour AI",
    description: (
      <>
      <span className="text-green-500">AI</span> program that creates an <span className="text-green-500">optimal path</span> for a computer player unit to traverse obstacle 
      courses of varying difficulty in Minecraft using <span className="text-green-500">reinforcement learning</span>. 100% of courses tested solved accurately.
    </>
    ), 
    media: { type: "video", src: "https://www.youtube.com/embed/AdDgQ5oNWB0" }, 
    technologies: ["Python", "Malmo API"], 
    links: [] 
  },
  { 
    title: "Wordle", 
    description: (
      <>
      Remake of The New York Times <span className="text-green-500">Wordle</span> word game. Added <span className="text-green-500">hard mode</span> where the player cannot reuse 
      incorrect letters from previous guesses or the game ends.
    </>
    ), 
    media: { type: "image", src: wordle, alt: "Wordle" }, 
    technologies: ["MIPS Assembly Language"], 
    links: [] 
  },
  { 
    title: "We Got Compagnie!", 
    description: (
    <>
      RPG fighting game. Winner of <span className="text-green-500">IEEE's 2023 Gamesig Student Showcase Special Recognition Award 
    for Most Innovative Audio and User Interface</span> and <span className="text-green-500">SGDA's Mini-grant for 2023's Student Games Showcase</span>.
    </>
    ), 
    media: { type: "video", src: "https://www.youtube.com/embed/QRIkhvTj6-4" }, 
    technologies: ["C++", "Unreal Engine", "FMOD Studio"], 
    links: [{ href: "https://zxgnjason.itch.io/we-got-compagnie", 
    icon: <IoGameController size={60} /> }, 
    { href: "https://github.com/GoodBreadStudios/WeGotCompagnie", 
    icon: <FiGithub size={60} /> }] 
  },
  { 
    title: "Object Detector", 
    description: (
      <>
     Given a collection of targets to identify, this program <span className="text-green-500">detects objects and faces in images with 70% accuracy</span>.
     </>
    ), 
    media: { type: "image", src: detector, alt: "Object Detector" }, 
    technologies: ["Python", "NumPy", "Matplotlib", "Jupyter Notebook", "Gradient Features"], 
    links: [] 
  },
];

function Projects() {
  const [, setActiveDialog] = useState(null);
  const dialogRefs = useRef([]);

  const handleLearnMore = (index) => {
    setActiveDialog(index);
    dialogRefs.current[index]?.showModal();
  };

  const left = [0, 1];
  const middle = [2];
  const right = [3, 4];

  const renderProject = (index) => {
    const project = projects[index];

    return (
      <div key={index} className="nes-container is-dark with-title">
        <p className="title">{project.title}</p>

        {project.media.type === "image" ? (
          <img
            src={project.media.src}
            className={`block mx-auto mb-2 ${
              project.title === "Wordle"
                ? "h-[500px]"
                : "h-[240px] w-[400px]"
            }`}
            alt={project.media.alt}
            draggable={false}
          />
        ) : (
          <iframe
            width="400"
            height="240"
            src={project.media.src}
            title={project.title}
            frameBorder="0"
            allowFullScreen
            className="mb-2"
          />
        )}

        <div className="flex justify-center mt-4">
          <button
            className="nes-btn is-primary"
            onClick={() => handleLearnMore(index)}
          >
            Learn More
          </button>
        </div>

        <dialog
          className="nes-dialog is-dark w-[90vw] max-w-[700px]"
          style={{
            overflow: "hidden",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            margin: 0
          }}
          ref={el => (dialogRefs.current[index] = el)}
        >
          <form method="dialog" className="text-center">
            {project.media.type === "image" ? (
              <img
                src={project.media.src}
                className={`block mx-auto mb-2 ${
                  project.title === "Wordle"
                    ? "h-[500px]"
                    : "h-[240px] w-[400px]"
                }`}
                alt={project.media.alt}
                draggable={false}
              />
            ) : (
              <iframe
                width="400"
                height="240"
                src={project.media.src}
                title={project.title}
                frameBorder="0"
                allowFullScreen
                className="mb-2 mx-auto"
              />
            )}

            <p className="mt-4">{project.description}</p>

            <p className="mt-4 text-sm text-blue-300">
              {project.technologies.join(", ")}
            </p>

            <menu className="dialog-menu flex justify-center">
              <button className="nes-btn is-error">Back</button>
            </menu>
          </form>
        </dialog>
      </div>
    );
  };

  return (
    <div>
      {/* BACKDROP DIM */}
      <style>
        {`
          dialog::backdrop {
            background: rgba(0, 0, 0, 0.7);
          }
        `}
      </style>

      {/* ================= DESKTOP  ================= */}
      <div className="hidden md:flex flex-row justify-center items-start gap-8">
        <div className="flex flex-col items-center max-w-5xl flex-1 mt-8 gap-y-8">
          {left.map(renderProject)}
        </div>

        <div className="flex flex-col items-center max-w-5xl flex-1 mt-20">
          {middle.map(renderProject)}
        </div>

        <div className="flex flex-col items-center max-w-5xl flex-1 mt-8 gap-y-8">
          {right.map(renderProject)}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="mt-6 flex flex-col items-center gap-6 px-3 md:hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className="nes-container is-dark with-title mx-auto w-full max-w-[420px]"
          >
            <p className="title text-sm">{project.title}</p>

            {project.media.type === "image" ? (
              <img
                src={project.media.src}
                className="w-full h-auto mb-2"
                alt={project.media.alt}
              />
            ) : (
              <iframe
                src={project.media.src}
                title={project.title}
                className="w-full aspect-video mb-2"
                allowFullScreen
              />
            )}

            <p className="text-xs leading-relaxed text-center">
              {project.description}
            </p>

            <p className="mt-3 text-[10px] text-blue-300 text-center">
              {project.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
