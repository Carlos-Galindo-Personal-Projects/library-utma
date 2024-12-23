import Link from "next/link";
import Loans from "./_components/Loans";

export default function LoansPage() {

  return (
    <>
      <div className="max-w-fit mx-auto mt-8">
        <h2
          className="text-4xl font-semibold text-center"
        >
          Préstamos
        </h2>
        <Link
          href="/auth/home/loans/add"
        >
          <button
            className="my-6 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded p-1 transition"
          >
            Registrar Préstamo
          </button>
        </Link>
      </div>
      <div className="w-4/5 max-w-fit mx-auto mb-8">
          <Loans />
      </div>
    </>
  );
}
