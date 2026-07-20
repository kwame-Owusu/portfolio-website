export interface Project {
    projectName: string;
    projectDesc: string;
    projectLink: string;
}

export const projects: Project[] = [
    {
        projectName: "Lista",
        projectDesc: "Your todo + notes manager on the terminal",
        projectLink: "https://github.com/kwame-Owusu/lista",
    },
    {
        projectName: "Geode",
        projectDesc: "Remote sync, MCP, and an API for your Obsidian vault.",
        projectLink: "https://github.com/8thpark/geode",
    },
    {
        projectName: "Sintesi",
        projectDesc: "System info fetch utility",
        projectLink: "https://github.com/kwame-Owusu/sintesi",
    },
    {
        projectName: "Sidl",
        projectDesc: "A cli tool to get information about twilio sids",
        projectLink: "https://github.com/kwame-Owusu/sidl",
    },
];
