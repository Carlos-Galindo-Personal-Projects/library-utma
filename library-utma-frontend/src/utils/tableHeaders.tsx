import { BookRecord, EntranceRecord, LoanRecord } from "@/types/responses";

const bookColumns: (keyof BookRecord)[] = ["isbn", "title", "author", "genre", "year", "amount"];
const bookHeaders: string[] = ["ISBN", "Título", "Autor", "Género", "Año", "Cantidad"];
const numberColumnsBooks: number = bookColumns.length;

const loanColumns: (keyof LoanRecord)[] = ['studentId', 'studentName', 'bookName', 'loanDate', 'returnDate', 'isReturned'];
const loanHeaders: string[] = ['Matrícula', 'Nombre', 'Libro', 'Fecha de préstamo', 'Fecha de devolución', 'Devuelto'];
const numberColumnsLoans: number = loanColumns.length;

const entrancesColumns: (keyof EntranceRecord)[] = ['studentId', 'studentName', 'initialHour', 'finalHour', 'insideLibrary'];
const entrancesHeaders = ['Matrícula', 'Nombre', 'Entrada', 'Salida', 'Dentro de la biblioteca'];
const numberColumnsEntrances: number = entrancesColumns.length;

export {
    bookColumns,
    bookHeaders,
    numberColumnsBooks,
    loanColumns,
    loanHeaders,
    numberColumnsLoans,
    entrancesColumns,
    entrancesHeaders,
    numberColumnsEntrances
};
