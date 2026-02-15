export interface Device {
    href: string;
    name: string;
    description: string;
}

export const devices: Device[] = [
    {
        href: "/posts/post-1",
        name: "MateBook 16s (2023)",
        description: "Laptop",
    },
    {
        href: "/posts/post-7",
        name: "Keychron V1",
        description: "Keyboard",
    },
    {
        href: "/posts/post-2",
        name: "Nikon D3300",
        description: "Camera",
    },
    {
        href: "/posts/post-4",
        name: "LyxPro HAS-10",
        description: "Headset",
    },
    {
        href: "/posts/post-3",
        name: "EGG OP1 8K",
        description: "Mouse",
    },
    {
        href: "/posts/post-5",
        name: "YOTTO Microphone",
        description: "Mic",
    },
    {
        href: "/posts/post-6",
        name: "Work Station",
        description: "PC",
    },
];
