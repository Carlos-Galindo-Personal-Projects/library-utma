"use client";

import { Suspense, useState } from "react";
import BooksTable from "./BooksTable";
import SkeletonTable from "../../_components/UI/CustomTableSkeleton";
import { Book } from "@/types/types";
import { books } from "@/mocks/books";
import NavTableButtons from "../../_components/NavTableButtons";

const Books = () => {
    const columns: (keyof Book)[] = ["isbn", "title", "author", "genre", "year", "amount"];
    const headers: string[] = ["ISBN", "Título", "Autor", "Género", "Año", "Cantidad"];
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
                books.length > 0 ? (
                    <>
                        <NavTableButtons
                            next={next}
                            page={page}
                            handlePrevious={handlePrevious}
                            handleNext={handleNext}
                        />
                        <Suspense fallback={<SkeletonTable columns={columns.length + 1} />}>
                            <BooksTable
                                columns={columns}
                                headers={headers}
                                data={books}
                            />
                        </Suspense>
                    </>
                ) : (
                    <div className="flex justify-center items-center h-48">
                        <p className="text-2xl font-semibold text-gray-500">No hay libros disponibles</p>
                    </div>
                )

            }
        </>
    );
};

export default Books;

