export interface UserLogin{
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
  returnDate?: string;
  isReturned: boolean;
}

export interface Book {
  isbn: `${number}-${number}-${number}-${number}-${number}`;
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

export interface BooksTableProps {
  columns: (keyof Book)[];
  headers: string[];
  data: Book[];
}

export interface LoansTableProps {
  columns: (keyof Loan)[];
  headers: string[];
  data: Loan[];
}

export interface ActivitiesTableProps {
  columns: (keyof Activity)[];
  headers: string[];
  data: Activity[];
}

export interface SkeletonTableProps {
  columns: number;
}

export interface FormBook {
  isbn: `${number}-${number}-${number}-${number}-${number}`;
  title: string;
  author: string;
  genreId: number;
  year: number;
  amount: number;
}
