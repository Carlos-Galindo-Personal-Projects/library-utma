"use client";

import { useState, useEffect } from "react";
import BooksTable from "./Table/BooksTable";
import NavTableButtons from "../../_components/FiltersTable";
import { AxiosError } from "axios";
import axiosInstance from "@/axios/axios";
import { BookRecord } from "@/types/responses";
import SelectorGenreFilter from "./Table/SelectorGenreFilter";
import SkeletonTable from "../../_components/UI/CustomTableSkeleton";
import { numberColumnsBooks as columns } from "@/utils/tableHeaders";

const Books = () => {

    const [books, setBooks] = useState<BookRecord[]>([]);
    const [genreId, setGenreId] = useState<number>(Number(localStorage.getItem("genreId")) || 0);
    const [page, setPage] = useState<number>(Number(localStorage.getItem("pageBook")) || 1);
    const [next, setNext] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchBooks() {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/Books/summary", {
                    params: {
                        page: page,
                        genreId: genreId,
                    },
                });
                setBooks(response.data.books);
                setNext(response.data.hasMore);
            } catch (error) {
                if (error instanceof AxiosError) {
                    alert(error.response?.data)
                    return
                }
                alert("Ha ocurrido un error");
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, [page, genreId]);

    const handlePrevious = () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            setNext(true);
            localStorage.setItem("pageBook", newPage.toString());
        }
    };

    const handleNext = () => {
        if (next) {
            const newPage = page + 1;
            setPage(newPage);
            localStorage.setItem("pageBook", newPage.toString());
        }
    };

    if ( loading ) return (
        <SkeletonTable columns={columns + 1} />
    )

    return (
        <>
            <SelectorGenreFilter
                genreId={genreId}
                setGenreId={setGenreId}
                setPage={setPage}
            />
            <NavTableButtons
                next={next}
                page={page}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
            <BooksTable
                data={books}
                setPage={setPage}
            />
        </>
    );
};

export default Books;
