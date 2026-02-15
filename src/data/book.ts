export interface Book {
    bookImage: string;
    bookAuthor: string;
    bookName: string;
    bookStatus: "Reading" | "To Read" | "Read";
    bookLink: string;
}

export const books: Book[] = [
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1468102872i/11138.jpg",
        bookAuthor: "C.S. Lewis",
        bookName: "Mere Christianity",
        bookStatus: "To Read",
        bookLink: "https://www.goodreads.com/book/show/11138.Mere_Christianity"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663546974i/18386.jpg",
        bookAuthor: "Leo Tolstoy",
        bookName: "The Death of Ivan Ilych",
        bookStatus: "To Read",
        bookLink: "https://www.goodreads.com/book/show/18386.The_Death_of_Ivan_Ilych"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562150630i/45280024.jpg",
        bookAuthor: "Dave Thomas, Andrew Hunt",
        bookName: "The Pragmatic Programmer",
        bookStatus: "Reading",
        bookLink: "https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559479147i/388586.jpg",
        bookAuthor: "Alessandro Manzoni",
        bookName: "I promessi sposi", bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/388586.I_promessi_sposi"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1623122286i/19087989.jpg",
        bookAuthor: "Makoto Yukimura",
        bookName: "Vinland Saga",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/19087989-vinland-saga"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg",
        bookAuthor: "Fyodor Dostoevsky",
        bookName: "Crime and Punishment",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/7144.Crime_and_Punishment"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347880847i/8065805.jpg",
        bookAuthor: "Takehiko Inoue",
        bookName: "Vagabond",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/656.Vagabond_Vol_1"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451409702i/28383248.jpg",
        bookAuthor: "Cal Newport",
        bookName: "Deep Work",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/25744928-deep-work"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1304336133i/9303025.jpg",
        bookAuthor: "Naoki Urasawa",
        bookName: "Monster",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/9303025-monster-vol-1"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385987932i/18796321.jpg",
        bookAuthor: "Fyodor Dostoevsky",
        bookName: "Notes from Underground",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/49455.Notes_from_Underground"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344498367i/1308213.jpg",
        bookAuthor: "Naoki Urasawa",
        bookName: "20th Century Boys",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/1308213.20th_Century_Boys_Vol_1"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422638843i/194746.jpg",
        bookAuthor: "Ozamu Dazai",
        bookName: "No Longer Human",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/194746.No_Longer_Human"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327991553i/762476.jpg",
        bookAuthor: "Natsume Sōseki",
        bookName: "Kokoro",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/762476.Kokoro"
    },
    {
        bookImage: "https://cdn.myanimelist.net/images/manga/1/211898.jpg",
        bookAuthor: "Inoryuu, Hajime",
        bookName: "My Dearest Self With Malice Aforethought",
        bookStatus: "Read",
        bookLink: "https://myanimelist.net/manga/115746/Shinai_naru_Boku_e_Satsui_wo_Komete"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1493054130i/34948599.jpg",
        bookAuthor: "Tsuyoshi Yasuda",
        bookName: "DAYS",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/34948599-days-vol-1"
    },
    {
        bookImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1432712438i/13154150.jpg",
        bookAuthor: "Isayama Hajime",
        bookName: "Attack on Titan",
        bookStatus: "Read",
        bookLink: "https://www.goodreads.com/book/show/13154150-attack-on-titan-vol-1"
    }
];