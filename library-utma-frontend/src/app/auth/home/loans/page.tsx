import { loans } from "@/mocks/loans";
import { Loan } from "@/types/types";
import SkeletonTable from "../_components/UI/CustomTableSkeleton";
import { Suspense } from "react";
import Link from "next/link";
import LoansTable from "./_components/LoansTable";

export default function LoansPage() {

  const columns: (keyof Loan)[] = ['studentId', 'studentName', 'bookName', 'loanDate', 'returnDate', 'isReturned'];
  const headers: string[] = ['Matrícula', 'Nombre', 'Libro', 'Fecha de préstamo', 'Fecha de devolución', 'Devuelto'];

  return (
    <>
      <div className="max-w-fit mx-auto my-8">
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
      </div>
      <div className="w-4/5 max-w-fit mx-auto mb-8">
        <Suspense fallback={<SkeletonTable columns={columns.length} />} >
          <LoansTable columns={columns} headers={headers} data={loans} />
        </Suspense>
      </div>
    </>
  );
}
