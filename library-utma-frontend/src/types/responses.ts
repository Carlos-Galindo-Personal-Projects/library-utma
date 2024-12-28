import { Entrance, Book } from "./generic";

export interface BookRecord extends Book {
    genre: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface LoanRecord {
    id: string;
    studentId: `UTM${number}`;
    studentName: string;
    bookName: string;
    loanDate: string;
    returnDate?: string;
    isReturned: boolean;
}


export interface EntranceRecord extends Entrance {
    id: number;
    studentName: string;
    initialHour: string;
    finalHour?: string;
    insideLibrary: boolean;
}

export interface BookSelector {
    isbn: `${number}-${number}-${number}-${number}-${number}`;
    title: string;
}

export interface StudentSelector {
    id: `UTM${number}`;
    name: string;
}

export interface UserTypeSelector {
    id: number;
    name: string;
}
