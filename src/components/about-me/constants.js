import { radarDisplay, skillsData, toolsData, toolsOptions } from "./radars";

const aboutMeTable = (
    <div className="w-full overflow-x-auto">
      <table
        className="nes-table is-bordered is-centered w-full max-w-3xl bg-white border-collapse border-spacing-0 text-xs md:text-base"
        style={{ borderCollapse: "collapse", borderSpacing: 0 }}
      >
        <tbody>
  
          <tr>
            <td className="!bg-[#C4C2C2] whitespace-nowrap px-2 py-2">
              Type
            </td>
  
            <td className="px-2 py-2 text-center">
            {/* Desktop badge */}
            <span className="hidden md:inline-block">
                <span
                className="nes-badge is-splited"
                style={{ width: "250px" }}
                >
                <span className="is-success" style={{ width: "50%" }}>
                    Software
                </span>
                <span className="is-dark" style={{ width: "50%" }}>
                    Engineer
                </span>
                </span>
            </span>

            {/* Mobile fallback text */}
            <span className="block md:hidden text-xs font-bold">
                Software Engineer
            </span>
            </td>
          </tr>
  
          <tr style={{ borderBottom: "1px solid #d0d0d0" }}>
            <td className="!bg-[#C4C2C2] whitespace-nowrap px-2 py-2">
              Age
            </td>
            <td className="px-2 py-2">24</td>
          </tr>
  
          <tr style={{ borderBottom: "1px solid #d0d0d0" }}>
            <td className="!bg-[#C4C2C2] whitespace-nowrap px-2 py-2">
              Height
            </td>
            <td className="px-2 py-2">5'4</td>
          </tr>
  
          <tr style={{ borderBottom: "1px solid #d0d0d0" }}>
            <td className="!bg-[#C4C2C2] px-2 py-2 align-top">
              Work Experience
            </td>
            <td className="px-2 py-2 break-words">
              Snap Inc, SAIC
            </td>
          </tr>
  
        </tbody>
      </table>
    </div>
  );

export const tabConfig = [
    { label: "About", color: "#e76e55" },
    { label: "Coding Languages", color: "#209cee" },
    { label: "Tools", color: "#f7d51d"},
];

export const aboutTabs = [
    {
        title: "About Me",
        tabColor:  "#e76e55",
        table: aboutMeTable,
        description: (
            <>
              Haley Inzunza has <span className="text-red-500"> 2 years of experience </span> as a <span className="text-red-500"> full stack software engineer</span>. 
              She graduated with a degree in <span className="text-red-500"> Computer Science </span> from <span className="text-red-500">UC Irvine</span> in December of 2023. 
              She has various technical interests in domains like <span className="text-red-500"> Computer Graphics</span>,  <span className="text-red-500">AI</span>, <span className="text-red-500">Computer Vision</span>, <span className="text-red-500">UI/UX</span>, and <span className="text-red-500">Game Development.</span>
            </>
          ),
        
    },
    {
        title: "Coding Languages",
        tabColor: "#209cee",
        chart: radarDisplay(skillsData),
        
    }, 
    {
        title: "Tools",
        tabColor: "#f7d51d",
        chart: radarDisplay(toolsData, toolsOptions),
    }, 

];
