export interface UserLogin{
    email: string;
    password: string;
}

export interface ZodError{
    message: string;
}

export interface IconProps {
  IconComponent: React.ElementType;
  route: string;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface Loan {
  id: string;
  studentId: `UTM${number}`;
  studentName: string;
  bookName: string;
  loanDate: string;
  returnDate: string;
  isReturned: boolean;
}

export interface Book {
  isbn: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  amount: number;
}

export interface Activity {
  id: number;
  studentId: `UTM${number}`;
  studentName: string;
  initialHour: string;
  finalHour?: string;
  insideLibrary: boolean;
}

export interface CustomTableProps {
    columns: (keyof Loan | keyof Book | keyof Activity)[];
    headers: string[];
    data: (Loan | Book | Activity)[];
}
