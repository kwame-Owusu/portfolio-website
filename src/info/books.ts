export interface Book {
  bookAuthor: string;
  bookName: string;
  bookStatus: 'Reading' | 'To Read' | 'Read';
  bookLink: string;
}

export const books: Book[] = [
  {
    bookAuthor: 'C.S. Lewis',
    bookName: 'Mere Christianity',
    bookStatus: 'To Read',
    bookLink: 'https://www.goodreads.com/book/show/11138.Mere_Christianity',
  },
  {
    bookAuthor: 'Leo Tolstoy',
    bookName: 'The Death of Ivan Ilych',
    bookStatus: 'To Read',
    bookLink:
      'https://www.goodreads.com/book/show/18386.The_Death_of_Ivan_Ilych',
  },
  {
    bookAuthor: 'Oscar Wilde',
    bookName: 'The Picture of Dorian Gray',
    bookStatus: 'Reading',
    bookLink:
      'https://www.goodreads.com/en/book/show/489732.The_Picture_of_Dorian_Gray',
  },
  {
    bookAuthor: 'Dave Thomas, Andrew Hunt',
    bookName: 'The Pragmatic Programmer',
    bookStatus: 'Reading',
    bookLink:
      'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
  },
  {
    bookAuthor: 'Alessandro Manzoni',
    bookName: 'I promessi sposi',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/388586.I_promessi_sposi',
  },
  {
    bookAuthor: 'Makoto Yukimura',
    bookName: 'Vinland Saga',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/19087989-vinland-saga',
  },
  {
    bookAuthor: 'Fyodor Dostoevsky',
    bookName: 'Crime and Punishment',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/7144.Crime_and_Punishment',
  },
  {
    bookAuthor: 'Takehiko Inoue',
    bookName: 'Vagabond',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/656.Vagabond_Vol_1',
  },
  {
    bookAuthor: 'Cal Newport',
    bookName: 'Deep Work',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/25744928-deep-work',
  },
  {
    bookAuthor: 'Naoki Urasawa',
    bookName: 'Monster',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/9303025-monster-vol-1',
  },
  {
    bookAuthor: 'Fyodor Dostoevsky',
    bookName: 'Notes from Underground',
    bookStatus: 'Read',
    bookLink:
      'https://www.goodreads.com/book/show/49455.Notes_from_Underground',
  },
  {
    bookAuthor: 'Naoki Urasawa',
    bookName: '20th Century Boys',
    bookStatus: 'Read',
    bookLink:
      'https://www.goodreads.com/book/show/1308213.20th_Century_Boys_Vol_1',
  },
  {
    bookAuthor: 'Ozamu Dazai',
    bookName: 'No Longer Human',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/194746.No_Longer_Human',
  },
  {
    bookAuthor: 'Natsume Sōseki',
    bookName: 'Kokoro',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/762476.Kokoro',
  },
  {
    bookAuthor: 'Inoryuu, Hajime',
    bookName: 'My Dearest Self With Malice Aforethought',
    bookStatus: 'Read',
    bookLink:
      'https://myanimelist.net/manga/115746/Shinai_naru_Boku_e_Satsui_wo_Komete',
  },
  {
    bookAuthor: 'Tsuyoshi Yasuda',
    bookName: 'DAYS',
    bookStatus: 'Read',
    bookLink: 'https://www.goodreads.com/book/show/34948599-days-vol-1',
  },
  {
    bookAuthor: 'Isayama Hajime',
    bookName: 'Attack on Titan',
    bookStatus: 'Read',
    bookLink:
      'https://www.goodreads.com/book/show/13154150-attack-on-titan-vol-1',
  },
];
