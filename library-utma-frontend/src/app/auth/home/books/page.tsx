import { Book } from "@/types/types";
import CustomTable from "../_components/CustomTable";
import { books } from "@/mocks/books";

export default function BooksPage() {

  const columns: (keyof Book)[] = ['isbn', 'title', 'author', 'genre', 'year', 'amount'];
  const headers: string[] = ['ISBN', 'Título', 'Autor', 'Género', 'Año', 'Cantidad'];

  return (
    <div
      className="flex flex-col items-center justify-center h-full"
    >
      <div>
        <h2
          className="text-2xl font-semibold text-center"
        >
          Books Page
        </h2>
      </div>
      <div>
        <button
          className="my-4 px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Book
        </button>
      </div>
      <div>
        <CustomTable columns={columns} headers={headers} data={books} />
      </div>
    </div>
  );
}
