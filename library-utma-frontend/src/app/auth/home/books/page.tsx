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
            className="my-6 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded p-1 transition"
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
