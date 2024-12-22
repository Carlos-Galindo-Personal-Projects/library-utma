import { UseFormRegister } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { BookForm } from "./requests";
import { EntranceRecord, BookRecord, LoanRecord } from "./responses";

export interface GenreSelectorProps {
  register: UseFormRegister<BookForm>;
}

export interface GenreFilterProps {
  genreId: number; setGenreId: Dispatch<SetStateAction<number>>
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
}

export interface FilterTableProps {
  next: boolean;
  page: number;
  genreId: number;
  setGenreId: Dispatch<SetStateAction<number>>;
  handlePrevious: () => void;
  handleNext: () => void;
}

export interface LoansTableProps {
  data: LoanRecord[];
}

export interface EntrancesTableProps {
  data: EntranceRecord[];
}

export interface SkeletonTableProps {
  columns: number;
}
