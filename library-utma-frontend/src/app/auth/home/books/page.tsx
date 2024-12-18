import { Book } from "@/types/types";
import CustomTable from "../_components/CustomTable";
import { books } from "@/mocks/books";
import { Suspense } from "react";
import SkeletonTable from "../_components/UI/CustomTableSkeleton";
import Link from "next/link";

export default function BooksPage() {

  const columns: (keyof Book)[] = ['isbn', 'title', 'author', 'genre', 'year', 'amount'];
  const headers: string[] = ['ISBN', 'Título', 'Autor', 'Género', 'Año', 'Cantidad'];

  return (
    <div
      className="flex flex-col items-center justify-center h-full my-12"
    >
      <div>
        <h2
          className="text-4xl font-semibold text-center"
        >
          Libros
        </h2>
      </div>
      <div>
        <Link href="/auth/home/books/add">
          <button
            className="my-4 px-4 py-2 text-white bg-blue-500 rounded"
          >
            Añadir Libro
          </button>
        </Link>
      </div>
      <div>
      <Suspense fallback={<SkeletonTable columns={columns.length} />} >
          <CustomTable columns={columns} headers={headers} data={books} />
        </Suspense>
      </div>
    </div>
  );
}
