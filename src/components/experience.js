import map from "../assets/work-experience/map8bit.png";
import position8bit1 from "../assets/work-experience/position8bit1.png";
import position8bit2 from "../assets/work-experience/position8bit2.png";
import position8bit3 from "../assets/work-experience/position8bit3.png";
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
    icon: position8bit1,
    left: 30,
    top: 38,
    title: "UC Irvine",
    subtitle: "Head Undergraduate Teaching Assistant",
    dates: "January 2022 - January 2024",
    summary: [
      {
        text: "Taught advanced algorithms, data structures, and sorting algorithms in C++",
        highlight: ["advanced algorithms", "data structures"],
      },
      {
        text: "Restructured lesson plans, homework, and exams",
      },
      {
        text: "Led and trained 25+ undergraduate teaching assistants",
        highlight: ["25+"],
      },
    ],
  },
  {
    id: "saic",
    icon: position8bit2,
    left: 52,
    top: 54,
    title: "Science Applications International Corporation (SAIC)",
    subtitle: "Visualization Intern – Multimedia & Game Programming",
    dates: "June 2023 - August 2023",
    summary: [
      {
        text: "Developed a U.S. Space Force-sponsored multiplayer war-game simulation modeling real-world military scenarios.",
        highlight: ["U.S. Space Force"],
      },
      {
        text: "Integrated MATLAB-based orbital mechanics simulations into an Unreal Engine environment.",
        highlight: ["MATLAB"],
      },
      {
        text: "Built gameplay systems for asset selection and action execution across single-player and multi-player modes.",
        highlight: ["single-player", "multi-player"],
      },
    ],
  },
  {
    id: "snap",
    icon: position8bit3,
    left: 70,
    top: 40,
    title: "Snap Inc.",
    subtitle: "Software Engineer",
    dates: "July 2025 - Present",
    summary: [
      {
        text: "Led Google Analytics rollout compliant with the California Consumer Privacy Act, restoring analytics across Snap marketing sites in California and increasing measurable traffic visibility by 1-10% per site.",
        highlight: ["Google Analytics", "California Consumer Privacy Act", "1-10%"],
      },
      {
        text: "Built scalable, high-performance TypeScript/React features and reusable UI components across Snap properties.",
        highlight: ["TypeScript", "React"],
      },
      {
        text: "Participated in on-call rotations, triaging and resolving production incidents for high-traffic web applications.",
        highlight: ["on-call rotations"],
      },
    ],
    extraRole: "Software Engineer Apprentice",
    extraDates: "August 2024 - June 2025",
  },
];

function WorkExperience() {
  const [selectedStop, setSelectedStop] = useState(null);

  const activeStop = experienceStops.find(
    (stop) => stop.id === selectedStop
  );

  return (
    <div
      className="flex min-h-screen w-full flex-col pb-8"
      style={viewportFullWidth}
    >
      <div className="flex w-full flex-1 justify-center px-4 pt-1">
        <div className="w-full max-w-[1152px]">
          <div className="text-center">
            <h1 className="press-start-2p-regular mt-10 text-[1.05rem] leading-7 text-black md:text-lg">
              Click a milestone on the map to inspect a chapter of my career.
            </h1>
          </div>

          <div
            className="relative w-full mt-10 max-w-[1152px]"
            style={{ aspectRatio: `${mapWidth} / ${mapHeight}` }}
          >
            {/* MAP (slight dim when active) */}
            <img
              src={map}
              alt="8-bit career map"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200`}
              style={{
                imageRendering: "pixelated",
                opacity: activeStop ? 0.6 : 1,
              }}
            />

            {/* STOPS */}
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

            {/* MODAL */}
            {activeStop && (
              <div
                className="absolute inset-0 z-20 flex items-center justify-center p-4"
                onClick={() => setSelectedStop(null)}
              >
                <div
                  className="nes-container is-dark with-title w-full max-w-4xl px-6 py-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="title tracking-wide">
                    {activeStop.title}
                  </p>

                  <div>
                    <p className="text-lg text-yellow-300 tracking-wide">
                      {activeStop.subtitle}
                    </p>

                    <p className="mt-2 text-sm text-blue-300 tracking-wide">
                      {activeStop.dates}
                    </p>

                    {activeStop.extraRole && (
                      <>
                        <p className="mt-4 text-base text-purple-300 tracking-wide">
                          {activeStop.extraRole}
                        </p>
                        <p className="mt-1 text-xs text-purple-200 tracking-wide">
                          {activeStop.extraDates}
                        </p>
                      </>
                    )}

                    <ul className="mt-6 space-y-2 text-white leading-6 text-sm md:text-base tracking-wide">
                      {activeStop.summary.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span>•</span>
                          <span>
                            {point.highlight
                              ? point.text
                                  .split(
                                    new RegExp(
                                      `(${point.highlight.join("|")})`,
                                      "gi"
                                    )
                                  )
                                  .map((part, i) =>
                                    point.highlight.includes(part) ? (
                                      <span key={i} className="text-green-300">
                                        {part}
                                      </span>
                                    ) : (
                                      part
                                    )
                                  )
                              : point.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setSelectedStop(null)}
                      className="nes-btn is-error"
                    >
                      Close
                    </button>
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