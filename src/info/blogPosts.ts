export interface BlogPost {
  title: string;
  date: string;
  href: string;
  img: string;
}

export const blogPosts: BlogPost[] = [
  {
    href: 'posts/to-write-is-to-think-long-live-suffering!',
    title: 'To write is to think; long live suffering!',
    date: 'Nov 25th, 2026',
    img: '/blog/think-about-your-art.jpg',
  },
  {
    href: 'posts/strive-for-beauty',
    title: 'Strive for Beauty',
    date: 'Oct 10th, 2026',
    img: '/blog/beauty.jpg',
  },
  {
    href: 'posts/the-existential-wickedness-of-man',
    title: 'The existential wickedness of man',
    date: 'May 7th, 2026',
    img: '/blog/mountains-vagabond.jpg',
  },
  {
    href: 'posts/linguistic-decay',
    title: 'Linguistic decay: a Ghana man problem',
    date: 'Mar 25th, 2026',
    img: '/blog/cape-coast.jpg',
  },
  {
    href: 'posts/competence-as-a-virtue',
    title: 'Competence as a virtue',
    date: 'Jan 21st, 2026',
    img: '/blog/infinite_vagabond.png',
  },
  {
    href: 'posts/in-pursuit-of-depth',
    title: 'In pursuit of depth',
    date: 'Jan 3rd, 2025',
    img: '/blog/astro.jpg',
  },
];
