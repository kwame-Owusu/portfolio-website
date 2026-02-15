export interface BlogPost {
    title: string;
    date: string;
    href: string;
    img: string;
}

export const blogPosts: BlogPost[] = [
    {
        href: 'posts/competence-as-a-virtue',
        title: 'Competence as a virtue',
        date: 'Jan 21st, 2026',
        img: '/blog/infinite_vagabond.png'
    },
    {
        href: 'posts/in-pursuit-of-depth',
        title: 'In pursuit of depth',
        date: 'Jan 3rd, 2025',
        img: '/blog/astro.jpg'
    }
]