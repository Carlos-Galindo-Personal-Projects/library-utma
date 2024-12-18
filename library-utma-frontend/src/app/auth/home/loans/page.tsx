import { loans } from "@/mocks/loans";
import CustomTable from "../_components/CustomTable";
import { Loan } from "@/types/types";
import SkeletonTable from "../_components/UI/CustomTableSkeleton";
import { Suspense } from "react";
import Link from "next/link";

export default function LoansPage() {

  const columns: (keyof Loan)[] = ['studentId', 'studentName', 'bookName', 'loanDate', 'returnDate', 'isReturned'];
  const headers: string[] = ['Matrícula', 'Nombre', 'Libro', 'Fecha de préstamo', 'Fecha de devolución', 'Devuelto'];

  return (
    <div
      className="flex flex-col items-center justify-center h-full my-12"
    >
      <h2
        className="text-4xl font-semibold text-center"
      >
        Préstamos
      </h2>
      <Link
        href="/auth/home/loans/add"
      >
        <button
          className="my-4 px-4 py-2 text-white bg-blue-500 rounded"
        >
          Registrar Préstamo
        </button>
      </Link>
      <div>
        <Suspense fallback={<SkeletonTable columns={columns.length} />} >
          <CustomTable columns={columns} headers={headers} data={loans} />
        </Suspense>
      </div>
    </div>
  );
}
