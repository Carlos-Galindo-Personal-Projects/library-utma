import { UseFormRegister } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { BookForm, EntranceForm, UserRegister } from "./requests";
import { EntranceRecord, BookRecord, LoanRecord, Genre, StudentSelector, UserTypeSelector } from "./responses";

export interface GenreSelectorProps {
  genres: Genre[];
  register: UseFormRegister<BookForm>;
  defaultValue?: number;
}

export interface GenreFilterProps {
  setPage: Dispatch<SetStateAction<number>>;
  genreId: number;
  setGenreId: Dispatch<SetStateAction<number>>
}

export interface IconProps {
  IconComponent: React.ElementType;
  route: string;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface BooksTableProps {
  data: BookRecord[];
  setPage: Dispatch<SetStateAction<number>>;
}

export interface FilterTableProps {
  next: boolean;
  page: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

export interface LoansTableProps {
  data: LoanRecord[];
  setPage: Dispatch<SetStateAction<number>>;
}

export interface EntrancesTableProps {
  data: EntranceRecord[];
}

export interface SkeletonTableProps {
  columns: number;
}

export interface DynamicPageProps {
  params: Promise<{ id: string }>;
}

export interface DeleteBookButtonProps {
  isbn: `${number}-${number}-${number}-${number}-${number}`;
  setPage: Dispatch<SetStateAction<number>>
}

export interface EditBookFormProps {
  book: BookForm;
  genres: Genre[]
}

export interface EditLoanButtonProps {
  id: number;
  setPage: Dispatch<SetStateAction<number>>
}

export interface StudentSelectorProps {
  register: UseFormRegister<EntranceForm>;
  studentOptions: StudentSelector[]
}

export interface UserTypeSelectorProps {
  register: UseFormRegister<UserRegister>;
  userTypeOptions: UserTypeSelector[]
}
