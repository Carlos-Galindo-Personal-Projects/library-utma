import { loans } from "@/mocks/loans";
import CustomTable from "../_components/CustomTable";
import { Loan } from "@/types/types";

export default function LoansPage() {

  const columns: (keyof Loan)[] = ['studentId', 'studentName', 'bookName', 'loanDate', 'returnDate', 'isReturned'];
  const headers: string[] = ['Matrícula', 'Nombre', 'Libro', 'Fecha de préstamo', 'Fecha de devolución', 'Devuelto'];

  return (
    <div
      className="flex flex-col items-center justify-center h-full my-6"
    >
      <div>
        <h2
          className="text-4xl font-semibold text-center"
        >
          Loans Page
        </h2>
      </div>
      <div>
        <button
          className="my-4 px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Loan
        </button>
      </div>
      <div>
        <CustomTable columns={columns} headers={headers} data={loans} />
      </div>
    </div>
  );
}
