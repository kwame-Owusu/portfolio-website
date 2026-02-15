export interface Project {
    projectName: string;
    projectDesc: string;
    projectLink: string;
}

export const projects: Project[] = [
    {
        projectName: "lista",
        projectDesc: "Your todo + notes manager on the terminal",
        projectLink: "https://github.com/kwame-Owusu/lista",
    },
    {
        projectName: "sintesi",
        projectDesc: "Simple system info fetch utility",
        projectLink: "https://github.com/kwame-Owusu/sintesi",
    },
    {
        projectName: "sidl",
        projectDesc: "A cli tool to get information about twilio sids",
        projectLink: "https://github.com/kwame-Owusu/sidl",
    },
    {
        projectName: "accorcia",
        projectDesc: "URL shortener service with redis as data store",
        projectLink: "https://github.com/kwame-Owusu/accorcia",
    },
];
