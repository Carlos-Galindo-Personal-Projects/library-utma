import { UseFormRegister } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { BookForm } from "./requests";
import { ActivityRecord, BookRecord, LoanRecord } from "./responses";

export interface GenreSelectorProps {
    register: UseFormRegister<BookForm>;
  }

  export interface IconProps {
    IconComponent: React.ElementType;
    route: string;
  }

export interface ChildrenProps {
    children: React.ReactNode;
  }

  export interface BooksTableProps {
    columns: (keyof BookRecord)[];
    headers: string[];
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
    columns: (keyof LoanRecord)[];
    headers: string[];
    data: LoanRecord[];
  }

  export interface ActivitiesTableProps {
    columns: (keyof ActivityRecord)[];
    headers: string[];
    data: ActivityRecord[];
  }

  export interface SkeletonTableProps {
    columns: number;
  }
