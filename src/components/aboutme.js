import React, { useRef, useState } from "react";
// import TrapezoidTitleBarLeft from './TrapezoidTitleBarLeft';
// import TrapezoidTitleBarRight from './TrapezoidTitleBarRight';
import HXLOZ from '../assets/hxloz.gif';
import programming from '../assets/programming.png'
import technology from '../assets/technology.png'
import click from "../assets/Retro8.mp3";
import { Link } from "react-router-dom";
import SkillsRadar from "./skillsRadar";
const about_selections = [
    {
        title: "About Me",
        tabColor:  "#e76e55",
        table: (
            <table
                className="nes-table is-bordered is-centered w-full max-w-3xl bg-white border-collapse border-spacing-0"
                style={{ borderCollapse: "collapse", borderSpacing: 0 }}
            >
                <tbody>
                    <tr>
                        <td className="!bg-[#C4C2C2]">Type</td>
                        <td>
                            <span className="nes-badge is-splited" style={{ width: "250px" }}>
                                <span className="is-success" style={{ width: "50%" }}>Software</span>
                                <span className="is-dark" style={{ width: "50%" }}>Engineer</span>
                            </span>
                        </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #d0d0d0" }}>
                        <td className="!bg-[#C4C2C2]">Age</td>
                        <td>24</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #d0d0d0" }}>
                        <td className="!bg-[#C4C2C2]">Height</td>
                        <td>5'4</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #d0d0d0" }}>
                        <td className="!bg-[#C4C2C2]">Past Companies</td>
                        <td>Snap Inc, SAIC </td>
                    </tr>
                </tbody>
            </table>
        ),
        description: (
            <>
              Haley Inzunza has  <span className="text-red-500"> 2 years of experience </span> as a <span className="text-red-500"> full stack software engineer</span>. 
              She graduated with a degree in <span className="text-red-500"> Computer Science </span> from <span className="text-red-500">UC Irvine</span> in December of 2023. 
              She has various technical interests in domains like <span className="text-red-500"> Computer Graphics, AI, Computer Vision, UI/UX, and Game Development.</span>

            </>
          ),
        
    },
    {
        title: "Technical Skills",
        tabColor: "#209cee",
        chart: <SkillsRadar />,
        
    }, 
    {
        title: "My Technologies",
        subtitle: "Other Technologies",
        image: technology,
        data: (
            <>
            Unity Engine - Jupyter Notebook - FMOD Studio
            </>
        )
    }, 
];

function AboutMe() {
    const [currentSelectionIndex, setCurrentSelectionIndex] = useState(0);
    const clickSoundRef = useRef(new Audio(click));
    const tabConfig = [
        { label: "About", color: "#e76e55" },
        { label: "Coding Languages", color: "#209cee" },
        { label: "Tools", color: "#f7d51d"}
    ];
    
    const playClickSound = () => {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play().catch(() => {});
    };

    const currentSelection = about_selections[currentSelectionIndex];
    const activeTabColor = tabConfig[currentSelectionIndex].color;

    return (
        <div id="experience" className="flex flex-row justify-between items-center h-screen overflow-hidden pb-10 box-border">
            <div id="left" className="flex flex-col items-center w-full max-w-5xl flex-1 h-full">
                <div id="left-contents" className="flex flex-col justify-evenly items-center pl-5 pt-5 pb-5 max-w-5xl min-h-[calc(100%+2.5rem)]">
                    {/* Description and Button Container */}
                    <div id='left-title-bar' className="w-full flex-shrink-0 pl-2">
                        <div className="flex items-end gap-1 px-3 pt-3">
                            {tabConfig.map((tab, index) => {
                                const isActive = index === currentSelectionIndex;
                                return (
                                    <button
                                        key={tab.label}
                                        type="button"
                                        onClick={() => {
                                            playClickSound();
                                            setCurrentSelectionIndex(index);
                                        }}
                                        className="pixel-tab-button relative h-16 p-5 flex items-center justify-center transition-all duration-150 focus:outline-none focus:ring-0 focus-visible:outline-none"
                                        style={{
                                            backgroundColor: tab.color,
                                            outline: "none",
                                            marginBottom: isActive ? "-3px" : "0px",
                                            filter: isActive ? "none" : "brightness(0.95)",
                                            zIndex: isActive ? 3 : 1,
                                        }}
                                    >
                                        <span
                                            className="text-white text-lg md:text-xl font-bold whitespace-nowrap leading-none"
                                        >
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="pixel-panel-corners w-full h-full p-[15px]"
                        style={{
                            backgroundColor: activeTabColor,
                            marginTop: "0",
                            border: "3px solid rgba(0, 0, 0, 0.65)",
                            boxShadow: `0 0 0 1px rgba(0, 0, 0, 0.25)`,
                        }}
                    >
                    <div
                        className="pixel-panel-corners w-full h-full p-4 flex flex-col items-center"
                        style={{
                            backgroundColor: "#FAF8F0",
                        }}
                    >
                         {currentSelection.table && (
                            <div className="w-full flex justify-center pt-10 pb-10">
                                <div className="text-black">
                                    {currentSelection.table}
                                </div>
                            </div>
                        )}

                        {currentSelection.chart && (
                            <div className="w-full flex justify-center items-center pt-8 pb-8">
                                <div className="w-full max-w-2xl">
                                    {currentSelection.chart}
                                </div>
                            </div>
                        )}

                        <div className="w-full my-6">
                            <div
                                className="w-full h-[8px]"
                                style={{ backgroundColor: currentSelection.tabColor }}
                            />
                        </div>

                        {currentSelection.description && (
                            <div className="w-full flex justify-center">
                                <div style={{ maxWidth: '48rem' }}>
                                    <p className="text-black text-lg text-center pt-10 leading-loose">
                                    {currentSelection.description}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Optional Image */}
                        {currentSelection.image && (
                            <img src={currentSelection.image} alt={currentSelection.title} width={"800px"} className="mb-4" />
                        )}

                        <div id='sub-title-left' className="w-screen flex justify-start">
                        <div className="w-full max-w-5xl">
                        </div>
                        </div>

                        {currentSelection.data && (
                            <div className="w-full flex justify-center">
                                <div style={{ maxWidth: '48rem' }}>
                                    <p className="text-black text-lg text-center mt-10 mb-10 leading-loose">
                                    {currentSelection.data}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
                            
            </div>
            <div id="right" className="flex flex-col justify-start items-center w-full max-w-5xl h-full flex-1">
                <div id="socials" className="socials-spacing">
                    <a href="https://github.com/haleeei">
                        <i className="nes-icon github is-large"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/haley-inzunza-76033914a/">
                        <i className="nes-icon linkedin is-large"></i>
                    </a>
                    <a href="/Inzunza_Haley_2025_Resume 8-9.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="nes-btn is-error">  
                            RESUME
                        </button>
                    </a>
                </div>
                <img src={HXLOZ} alt="HXLOZ Icon" draggable={false} className="mt-10"/>
                <Link to="/experience">
                    <button className="nes-btn is-warning text-white center">  
                    Work Experience
                    </button>
                </Link>
                <div className="mt-5">
                    <Link to="/projects">
                        <button className="nes-btn is-warning text-white center">  
                        Personal Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;