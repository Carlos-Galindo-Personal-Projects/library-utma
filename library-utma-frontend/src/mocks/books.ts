import { BookForm } from "@/types/requests";
import { BookRecord } from "@/types/responses";

export const books: BookRecord[] = [
    {
        isbn: "978-3-16-148410-0",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Novel",
        year: 1925,
        amount: 5
    },
    {
        isbn: "978-1-4028-9467-7",
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949,
        amount: 8
    },
    {
        isbn: "978-0-7432-7356-5",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960,
        amount: 4
    },
    {
        isbn: "978-0-452-28423-4",
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Science Fiction",
        year: 1932,
        amount: 6
    },
    {
        isbn: "978-1-4028-9469-1",
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        genre: "Dystopian",
        year: 1953,
        amount: 7
    },
    {
        isbn: "978-0-14-143951-8",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: 1813,
        amount: 10
    },
    {
        isbn: "978-0-141-03435-8",
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: "Adventure",
        year: 1851,
        amount: 3
    },
    {
        isbn: "978-0-15-101026-4",
        title: "The Road",
        author: "Cormac McCarthy",
        genre: "Post-apocalyptic",
        year: 2006,
        amount: 5
    },
    {
        isbn: "978-0-452-28423-7",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic",
        year: 1951,
        amount: 9
    },
    {
        isbn: "978-1-4516-2581-0",
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian",
        year: 2008,
        amount: 12
    }
];

export const booksForm: BookForm[] = [
    {

        isbn: "978-3-16-148410-0",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genreId: 1,
        year: 1925,
        amount: 5
    },
    {
        isbn: "978-1-4028-9467-7",
        title: "1984",
        author: "George Orwell",
        genreId: 2,
        year: 1949,
        amount: 8
    },
    {
        isbn: "978-0-7432-7356-5",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genreId: 3,
        year: 1960,
        amount: 4
    },
    {
        isbn: "978-0-452-28423-4",
        title: "Brave New World",
        author: "Aldous Huxley",
        genreId: 4,
        year: 1932,
        amount: 6
    },
    {
        isbn: "978-1-4028-9469-1",
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        genreId: 2,
        year: 1953,
        amount: 7
    },
    {
        isbn: "978-0-14-143951-8",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genreId: 5,
        year: 1813,
        amount: 10
    },
    {
        isbn: "978-0-141-03435-8",
        title: "Moby-Dick",
        author: "Herman Melville",
        genreId: 6,
        year: 1851,
        amount: 3
    },
    {
        isbn: "978-0-15-101026-4",
        title: "The Road",
        author: "Cormac McCarthy",
        genreId: 7,
        year: 2006,
        amount: 5
    },
    {
        isbn: "978-0-452-28423-7",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genreId: 8,
        year: 1951,
        amount: 9
    },
    {
        isbn: "978-1-4516-2581-0",
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genreId: 2,
        year: 2008,
        amount: 12
    }
]
