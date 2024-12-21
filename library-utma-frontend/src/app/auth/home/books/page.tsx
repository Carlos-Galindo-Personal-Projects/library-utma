import Link from "next/link";
import Books from "./_components/Books";

export default function BooksPage() {

  return (
    <>
      <div className="max-w-fit mx-auto mt-8">
        <h2
          className="text-4xl font-semibold text-center"
        >
          Libros
        </h2>
        <Link
          href="/auth/home/books/add"
        >
          <button
            className="my-6 px-4 py-2 text-white bg-blue-500 rounded"
          >
            Añadir Libro
          </button>
        </Link>
      </div>
      <div className="w-4/5 max-w-fit mx-auto mb-8">
        <Books />
      </div>
    </>
  );
}
