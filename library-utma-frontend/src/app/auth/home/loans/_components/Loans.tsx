"use client";

import { Suspense, useState } from "react";
import LoansTable from "./LoansTable"
import SkeletonTable from "../../_components/UI/CustomTableSkeleton";
import { loans } from "@/mocks/loans";
import NavTableButtons from "../../_components/NavTableButtons";
import { Loan } from "@/types/types";

const Loans = () => {
    const columns: (keyof Loan)[] = ['studentId', 'studentName', 'bookName', 'loanDate', 'returnDate', 'isReturned'];
    const headers: string[] = ['Matrícula', 'Nombre', 'Libro', 'Fecha de préstamo', 'Fecha de devolución', 'Devuelto'];
    const [page, setPage] = useState<number>(1);
    const [next, setNext] = useState<boolean>(true);

    const handlePrevious = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
            setNext(true);
        }
    };

    const handleNext = () => {
        if (next) {
            const newPage = page + 1;
            setPage(newPage);

            if (newPage === 5) {
                setNext(false);
            }
        }
    };

    return (
        <>
            {
                loans.length > 0 ? (
                    <>
                        <NavTableButtons
                            next={next}
                            page={page}
                            handlePrevious={handlePrevious}
                            handleNext={handleNext}
                        />
                        <Suspense fallback={<SkeletonTable columns={columns.length} />} >
                            <LoansTable columns={columns} headers={headers} data={loans} />
                        </Suspense>
                    </>
                ) : (
                    <div className="flex justify-center items-center h-48">
                        <p className="text-2xl font-semibold text-gray-500">No hay préstamos registrados</p>
                    </div>
                )

            }
        </>
    );
};

export default Loans;
