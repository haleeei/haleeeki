import React, { useState } from "react";
import HXLOZ from '../assets/hxloz.gif';
import { usePlayClickSound } from "./utils";
import { aboutTabs, tabConfig } from "./constants";

/* ================= LEFT ================= */
function LeftSection({
    currentSelection,
    currentSelectionIndex,
    tabConfig,
    activeTabColor,
    onTabClick,
}) {
    return (
        <div
            id="left"
            className="flex flex-col items-center flex-[3] w-full max-w-5xl min-w-0 h-full overflow-hidden order-2 md:order-1"
        >
            <div className="flex flex-col items-center w-full h-full p-[10px] md:p-[15px] box-border">
                {/* TAB BAR */}
                <div id="left-title-bar" className="w-full flex-shrink-0 pl-2 md:pl-5">

                {/* MOBILE MENU */}
                <div className="flex flex-col gap-2 md:hidden mb-3">
                {tabConfig.map((tab, index) => {
                    const isActive = index === currentSelectionIndex;

                    return (
                    <button
                        key={tab.label}
                        onClick={() => {
                        onTabClick(index);
                        }}
                        className="w-full text-xs py-2 border-[3px] border-black text-white font-bold transition-all"
                        style={{
                        backgroundColor: tab.color,
                        filter: isActive ? "none" : "brightness(0.85)",
                        transform: isActive ? "scale(1.02)" : "scale(1)",
                        }}
                    >
                        {tab.label}
                    </button>
                    );
                })}
                </div>

                {/* DESKTOP TABS */}
                <div className="hidden md:flex items-end gap-1">
                {tabConfig.map((tab, index) => {
                    const isActive = index === currentSelectionIndex;

                    return (
                    <button
                        key={tab.label}
                        type="button"
                        onClick={() => onTabClick(index)}
                        className="pixel-tab-button relative h-12 px-4 flex items-center justify-center transition-all duration-150"
                        style={{
                        backgroundColor: tab.color,
                        marginBottom: isActive ? "-3px" : "0px",
                        filter: isActive ? "none" : "brightness(0.95)",
                        zIndex: isActive ? 3 : 1,
                        }}
                    >
                        <span className="text-white text-lg font-bold whitespace-nowrap">
                        {tab.label}
                        </span>
                    </button>
                    );
                })}
                </div>
                </div>

                {/* OUTER PANEL */}
                <div
                    className="pixel-panel-corners w-full h-full p-2 md:p-3 flex flex-col"
                    style={{
                        backgroundColor: activeTabColor,
                        border: "3px solid rgba(0, 0, 0, 0.65)",
                        boxShadow: `0 0 0 1px rgba(0, 0, 0, 0.25)`,
                    }}
                >
                    {/* INNER PANEL */}
                    <div
                        className="pixel-panel-corners w-full h-full p-3 md:p-4 flex flex-col"
                        style={{ backgroundColor: "#FAF8F0" }}
                    >

                        {currentSelection.table && (
                            <div className="w-full flex justify-center py-4 md:py-6 text-black">
                                {currentSelection.table}
                            </div>
                        )}

                        {currentSelection.chart && (
                            <div className="w-full flex justify-center items-center py-4 md:py-5">
                                <div className="w-full max-w-2xl">
                                    {currentSelection.chart}
                                </div>
                            </div>
                        )}

                        {currentSelection.table && (
                            <div className="w-full my-3 md:my-4">
                                <div
                                    className="w-full h-[4px]"
                                    style={{ backgroundColor: currentSelection.tabColor }}
                                />
                            </div>
                        )}

                        {currentSelection.description && (
                            <div className="w-full flex justify-center pt-2 md:pt-4">
                                <div className="max-w-[95%] md:max-w-[48rem]">
                                    <p className="text-black text-sm md:text-lg text-left leading-relaxed tracking-wide">
                                        {currentSelection.description}
                                    </p>
                                </div>
                            </div>
                        )}

                        {currentSelection.image && (
                            <img
                                src={currentSelection.image}
                                alt={currentSelection.title}
                                className="mb-4 w-full max-w-[800px]"
                            />
                        )}

                        {currentSelection.data && (
                            <div className="w-full flex justify-center">
                                <div className="max-w-[95%] md:max-w-[48rem]">
                                    <p className="text-black text-sm md:text-lg text-center mt-6 md:mt-10 mb-6 md:mb-10 leading-loose">
                                        {currentSelection.data}
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================= RIGHT ================= */
function RightSection() {
    return (
        <div
            id="right"
            className="flex flex-col items-center gap-2 flex-[2] w-full md:w-auto pt-4 md:pt-[50px] order-1 md:order-2"
        >
            {/* NAMEPLATE */}
            <div
                id="right-title"
                className="
                    pixel-banner-button 
                    bg-black text-white 
                    px-6 md:px-8 
                    py-2 md:py-3
                    text-sm md:text-lg 
                    mb-2 md:mb-4 
                    border-[3px] border-black 
                    tracking-wide
                "
            >
                Haley Inzunza
            </div>

            {/* AVATAR */}
            <img
                src={HXLOZ}
                alt="HXLOZ Icon"
                draggable={false}
                className="
                    pt-2 md:pt-6 
                    w-[220px] sm:w-[260px] md:w-full 
                    max-w-[320px] md:max-w-[525px]
                "
            />
        </div>
    );
}

/* ================= MAIN ================= */
function AboutMe() {
    const [currentSelectionIndex, setCurrentSelectionIndex] = useState(0);
    const playClick = usePlayClickSound();

    const currentSelection = aboutTabs[currentSelectionIndex];
    const activeTabColor = tabConfig[currentSelectionIndex].color;

    const handleTabClick = (index) => {
        playClick();
        setCurrentSelectionIndex(index);
    };

    return (
        <div
            id="experience"
            className="
                flex flex-col md:flex-row
                justify-between items-center md:items-start
                h-auto md:h-[calc(100vh-80px)]
                p-[10px] md:p-[15px]
                box-border
                gap-4 md:gap-5
            "
        >
            <RightSection />

            <LeftSection
                currentSelection={currentSelection}
                currentSelectionIndex={currentSelectionIndex}
                tabConfig={tabConfig}
                activeTabColor={activeTabColor}
                onTabClick={handleTabClick}
            />
        </div>
    );
}

export default AboutMe;