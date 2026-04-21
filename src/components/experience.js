import map from "../assets/work-experience/map8bit.png";
import position8bit1 from "../assets/work-experience/position8bit1.png";
import position8bit2 from "../assets/work-experience/position8bit2.png";
import position8bit3 from "../assets/work-experience/position8bit3.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const viewportFullWidth = {
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
};

const mapWidth = 384;
const mapHeight = 219;

const experienceStops = [
    {
        id: "uci",
        label: "01",
        icon: position8bit1,
        left: 30,
        top: 38,
        title: "UC Irvine",
        subtitle: "Head Undergraduate Teaching Assistant",
        dates: "January 2022 - January 2024",
        summary:
            "Supported the Data Structures & Algorithms sequence while helping improve course materials and the student learning experience.",
        highlights: [
            "Led student support for a large, fast-paced technical course.",
            "Helped restructure lesson plans, assignments, and exam materials.",
            "Built mentoring and communication skills while teaching core CS concepts.",
        ],
        tech: ["Java", "Data Structures", "Algorithms", "Teaching", "Mentorship"],
    },
    {
        id: "saic",
        label: "02",
        icon: position8bit2,
        left: 52,
        top: 54,
        title: "SAIC",
        subtitle: "Multimedia & Game Programming Intern",
        dates: "June 2023 - August 2023",
        summary:
            "Contributed to a multiplayer war-game designed for U.S. government simulation and training use cases.",
        highlights: [
            "Integrated simulations of military assets into the game's framework.",
            "Worked inside a game-focused engineering environment with real constraints.",
            "Strengthened experience with gameplay systems and technical collaboration.",
        ],
        tech: ["C++", "Unreal Engine", "Game Programming", "Simulation"],
    },
    {
        id: "snap",
        label: "03",
        icon: position8bit3,
        left: 70,
        top: 40,
        title: "Snap Inc.",
        subtitle: "Software Engineer",
        dates: "July 2025 - Present",
        extraRole: "Software Engineer Apprentice",
        extraDates: "August 2024 - June 2025",
        summary:
            "Built and improved customer-facing web experiences across Snap properties, focusing on polished UI delivery and platform work.",
        highlights: [
            "Shipped features and improvements for high-traffic web surfaces.",
            "Worked across product and platform teams in a fast-moving environment.",
            "Grew from apprentice to full-time engineer while owning meaningful product work.",
        ],
        tech: ["React", "Frontend", "Web Platform", "UI Engineering"],
    },
];

function WorkExperience() {
    const [selectedStop, setSelectedStop] = useState(null);

    const activeStop = experienceStops.find((stop) => stop.id === selectedStop);

    return (
        <div
            className="flex min-h-screen w-full flex-col pb-8"
            style={viewportFullWidth}
        >
            <div
                id="experience"
                className="button-container mt-10 flex shrink-0 flex-row justify-center"
            >
                <Link to="/aboutme">
                    <button className="nes-btn is-warning text-white center">
                        About Me
                    </button>
                </Link>
                <Link to="/projects">
                    <button className="nes-btn is-warning text-white center">
                        Personal Projects
                    </button>
                </Link>
            </div>

            <div className="flex w-full flex-1 justify-center px-4 pt-1">
                <div className="w-full max-w-[1152px]">
                    <div className="mb-0 text-center leading-none">
                        <h1 className="press-start-2p-regular mt-10 text-center text-[1.05rem] leading-7 text-black md:text-lg">
                            Click a milestone on the map to inspect a chapter of my career.
                        </h1>
                    </div>

                    <div
                        className="relative w-full mt-10 max-w-[1152px]"
                        style={{ aspectRatio: `${mapWidth} / ${mapHeight}` }}
                    >
                        <img
                            src={map}
                            alt="8-bit career map"
                            className="absolute inset-0 h-full w-full object-contain [image-rendering:pixelated]"
                        />

                        {experienceStops.map((stop) => {
                            const isActive = stop.id === selectedStop;

                            return (
                                <button
                                    key={stop.id}
                                    type="button"
                                    aria-label={`Open ${stop.title} experience`}
                                    onClick={() => setSelectedStop(stop.id)}
                                    className="experience-stop-button absolute z-10 w-12 md:w-24 lg:w-36 -translate-x-1/2 -translate-y-1/2 bg-transparent transition-transform duration-150 hover:scale-110 focus:outline-none focus-visible:scale-110"
                                    style={{
                                        left: `${stop.left}%`,
                                        top: `${stop.top}%`,
                                    }}
                                >
                                    <img
                                        src={stop.icon}
                                        alt=""
                                        className={`experience-stop-icon block w-full ${
                                            isActive ? "is-selected" : ""
                                        }`}
                                    />
                                    <span className="sr-only">{stop.label}</span>
                                </button>
                            );
                        })}

                        {activeStop && (
                            <div
                                className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 p-4"
                                onClick={() => setSelectedStop(null)}
                            >
                                <div
                                    className="nes-container is-dark with-title relative w-full max-w-2xl"
                                    onClick={(event) => event.stopPropagation()}
                                >
                                    <p className="title">{activeStop.title}</p>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedStop(null)}
                                        className="nes-btn is-error absolute right-4 top-4"
                                    >
                                        Close
                                    </button>

                                    <div className="pr-24">
                                        <p className="text-lg text-yellow-300">
                                            {activeStop.subtitle}
                                        </p>
                                        <p className="mt-2 text-sm text-blue-300">
                                            {activeStop.dates}
                                        </p>
                                        {activeStop.extraRole && (
                                            <>
                                                <p className="mt-4 text-base text-yellow-300">
                                                    {activeStop.extraRole}
                                                </p>
                                                <p className="mt-2 text-sm text-blue-300">
                                                    {activeStop.extraDates}
                                                </p>
                                            </>
                                        )}
                                        <p className="mt-6 leading-7 text-white">
                                            {activeStop.summary}
                                        </p>
                                        <ul className="mt-6 list-disc space-y-3 pl-5 text-left leading-7 text-white">
                                            {activeStop.highlights.map((highlight) => (
                                                <li key={highlight}>{highlight}</li>
                                            ))}
                                        </ul>
                                        <p className="mt-6 text-sm leading-6 text-green-300">
                                            Tech: {activeStop.tech.join(", ")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
