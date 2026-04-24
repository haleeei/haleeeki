import position8bit1 from "../../assets/work-experience/position8bit1.png";
import position8bit2 from "../../assets/work-experience/position8bit2.png";
import position8bit3 from "../../assets/work-experience/position8bit3.png";
import uci8bit from "../../assets/work-experience/Work Logos/uci8bit.png";
import saic8bit from "../../assets/work-experience/Work Logos/saic8bit.png";
import snap8bit from "../../assets/work-experience/Work Logos/snap8bit.png";

export const experienceStops = [
    {
      id: "uci",
      icon: position8bit1,
      dialogImg: uci8bit,
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
      dialogImg: saic8bit,
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
      dialogImg: snap8bit,
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
  