import { Book } from "./generic";

export interface ZodError {
    message: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    userTypeId: number;
}

export interface BookForm extends Book {
    genreId: number;
}

export interface LoanForm {
    studentId: `UTM${number}`;
    bookIsbn: `${number}-${number}-${number}-${number}-${number}`;
}
