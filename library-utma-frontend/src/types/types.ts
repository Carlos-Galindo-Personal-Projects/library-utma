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

export interface CustomTableProps {
    columns: (keyof Loan)[];
    headers: string[];
    data: Loan[];
}
