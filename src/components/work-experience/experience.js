import map from "../../assets/work-experience/map8bit.png";
import React, { useState } from "react";
import { experienceStops } from "./constants";

const mapWidth = 384;
const mapHeight = 219;

function WorkExperience() {
  const [selectedStop, setSelectedStop] = useState(null);

  const activeStop = experienceStops.find(
    (stop) => stop.id === selectedStop
  );

  const renderSummary = (stop, isMobile = false) => (
    <ul
      className={`mt-6 space-y-2 text-white tracking-wide ${
        isMobile
          ? "text-xs leading-relaxed"
          : "text-sm leading-6 md:text-base"
      }`}
    >
      {stop.summary.map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <span>*</span>
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
                      <span key={i} className="text-green-500">
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
  );

  return (
    <div className="flex min-h-screen w-full flex-col pb-8">
      <div className="flex w-full flex-1 justify-center px-4 pt-1">
        <div className="w-full max-w-[1152px]">
          <div className="text-center">
            <h1 className="press-start-2p-regular mt-10 hidden text-[1.05rem] leading-7 text-black md:block md:text-lg">
              Click a milestone on the map to inspect a chapter of my career.
            </h1>
          </div>

          <div
            className="relative mt-10 hidden w-full max-w-[1152px] md:block"
            style={{ aspectRatio: `${mapWidth} / ${mapHeight}` }}
          >
            <img
              src={map}
              alt="8-bit career map"
              className="absolute inset-0 h-full w-full object-contain transition-opacity duration-200"
              style={{
                imageRendering: "pixelated",
                opacity: 1,
              }}
            />

            {experienceStops.map((stop) => {
              const isActive = stop.id === selectedStop;

              return (
                <div
                  key={stop.id}
                  className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{
                    left: `${stop.left}%`,
                    top: `${stop.top}%`,
                  }}
                >
                  <div className="pointer-events-none absolute bottom-full -mb-5 flex justify-center">
                    <div className="nes-balloon from-right !p-0.5">
                      <img
                        src={stop.dialogImg}
                        alt=""
                        className="block h-9 w-auto max-w-[4.25rem] object-contain md:h-12 md:max-w-[5.25rem] lg:h-[3.75rem] lg:max-w-[6rem]"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Open ${stop.title} experience`}
                    onClick={() => setSelectedStop(stop.id)}
                    className="experience-stop-button w-12 bg-transparent focus:outline-none md:w-24 lg:w-36"
                  >
                    <img
                      src={stop.icon}
                      alt=""
                      className={`experience-stop-icon block w-full ${
                        isActive ? "is-selected" : ""
                      }`}
                      style={{ imageRendering: "pixelated" }}
                    />
                    <span className="sr-only">{stop.label}</span>
                  </button>
                </div>
              );
            })}

            {activeStop && (
              <div
                className="fixed inset-0 z-20 flex items-center justify-center p-4"
                onClick={() => setSelectedStop(null)}
              >
                <div className="absolute inset-0 bg-black/70" />
                <div
                  className="relative nes-container is-dark with-title w-full max-w-4xl px-6 py-4"
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

                    {renderSummary(activeStop)}

                    {activeStop.extraRole && (
                      <>
                        <p className="mt-4 text-base text-yellow-300 tracking-wide">
                          {activeStop.extraRole}
                        </p>
                        <p className="mt-1 text-xs text-blue-300 tracking-wide">
                          {activeStop.extraDates}
                        </p>
                      </>
                    )}
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

          <div className="mt-6 flex flex-col gap-6 md:hidden">
            {experienceStops.map((stop) => (
              <div key={stop.id} className="nes-container is-dark with-title w-full">
                <p className="title text-sm">{stop.title}</p>

                <p className="mt-4 text-xs leading-relaxed text-yellow-300 tracking-wide">
                  {stop.subtitle}
                </p>

                <p className="mt-2 text-[10px] text-blue-300 tracking-wide">
                  {stop.dates}
                </p>

                {renderSummary(stop, true)}

                {stop.extraRole && (
                  <>
                    <p className="mt-4 text-xs leading-relaxed text-yellow-300 tracking-wide">
                      {stop.extraRole}
                    </p>
                    <p className="mt-1 text-[10px] text-blue-300 tracking-wide">
                      {stop.extraDates}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
