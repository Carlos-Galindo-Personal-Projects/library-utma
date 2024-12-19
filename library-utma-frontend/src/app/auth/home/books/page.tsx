import { Book } from "@/types/types";
import BooksTable from "./_components/BooksTable";
import { books } from "@/mocks/books";
import { Suspense } from "react";
import SkeletonTable from "../_components/UI/CustomTableSkeleton";
import Link from "next/link";

export default function BooksPage() {

  const columns: (keyof Book)[] = ['isbn', 'title', 'author', 'genre', 'year', 'amount'];
  const headers: string[] = ['ISBN', 'Título', 'Autor', 'Género', 'Año', 'Cantidad'];

  return (
    <>
      <div className="max-w-fit mx-auto my-8">
        <h2
          className="text-4xl font-semibold text-center"
        >
          Libros
        </h2>
        <Link
          href="/auth/home/books/add"
        >
          <button
            className="my-4 px-4 py-2 text-white bg-blue-500 rounded"
          >
            Añadir Libro
          </button>
        </Link>
      </div>
      <div className="w-4/5 max-w-fit mx-auto mb-8">
        <Suspense fallback={<SkeletonTable columns={columns.length + 1} />} >
          <BooksTable columns={columns} headers={headers} data={books} />
        </Suspense>
      </div>
    </>
  );
}
