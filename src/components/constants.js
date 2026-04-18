import SkillsRadar from "./skillsRadar";

const aboutMeTable = 
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
            <td className="!bg-[#C4C2C2]">Work Experience</td>
            <td>Snap Inc, SAIC </td>
        </tr>
    </tbody>
</table>;

export const tabConfig = [
    { label: "About", color: "#e76e55" },
    { label: "Coding Languages", color: "#209cee" },
    { label: "Tools", color: "#f7d51d"},
    { label: "Fun", color: "#04d115" }
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
              She has various technical interests in domains like <span className="text-red-500"> Computer Graphics, AI, Computer Vision, UI/UX, and Game Development.</span>
            </>
          ),
        
    },
    {
        title: "Coding Languages",
        tabColor: "#209cee",
        chart: <SkillsRadar />,
        
    }, 
    {
        title: "Tools",
    }, 
    {
        title: "Fun",

    }, 
];