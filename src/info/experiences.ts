export interface Experience {
  expLink: string;
  expLogo: string;
  expCompany: string;
  expRole: string;
  expYear: string;
}

export const experiences: Experience[] = [
  {
    expCompany: 'Zing',
    expRole: 'Software Engineer',
    expYear: '2026',
    expLink: 'https://zing.dev/',
    expLogo: './zing-logo.svg',
  },
  {
    expCompany: 'Creo',
    expRole: 'Software Engineer',
    expYear: '2025',
    expLink: 'https://www.creoofficial.com/',
    expLogo: './creo-logo.jpg',
  },
];
