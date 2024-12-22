import { Activity, Book } from "./generic";

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


export interface ActivityRecord extends Activity {
    id: number;
    studentName: string;
    initialHour: string;
    finalHour?: string;
    insideLibrary: boolean;
}
