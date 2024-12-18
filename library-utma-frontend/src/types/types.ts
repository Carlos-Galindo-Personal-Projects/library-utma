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

type Item = Loan | Book | Activity;

export interface CustomTableProps {
    columns: (keyof Item)[];
    headers: string[];
    data: Item[];
}

export interface SkeletonTableProps {
  columns: number;
}
