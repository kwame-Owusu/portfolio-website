export interface Experience {
    expLink: string;
    expLogo: string;
    expTitle: string;
    expDesc: string;
    expIconClass?: string;
    backgroundColor?: string;
    hoverColor?: string;
}

export const experiences: Experience[] = [
    {
        expTitle: "Zing",
        expDesc: "Full Stack",
        expLink: "https://zing.dev/",
        expLogo: "./zing-logo.svg",
        backgroundColor: "rgba(129, 82, 247, 0.3)",
        hoverColor: "rgba(129, 82, 247, 0.67)",
    },
    {
        expTitle: "Creo",
        expDesc: "Web & Data",
        expLink: "https://www.creoofficial.com/",
        expLogo: "./creo-logo.jpg",
        expIconClass: "custom-icon-class",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        hoverColor: "rgba(0, 0, 0, 0.25)",
    },
];
