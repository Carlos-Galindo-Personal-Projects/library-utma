"use client";

import { useState, useEffect } from "react";
import BooksTable from "./BooksTable";
import SkeletonTable from "../../_components/UI/CustomTableSkeleton";
import NavTableButtons from "../../_components/FiltersTable";
import { AxiosError } from "axios";
import axiosInstance from "@/axios/axios";
import { BookRecord } from "@/types/responses";

const Books = () => {

    const [books, setBooks] = useState<BookRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const columns: (keyof BookRecord)[] = ["isbn", "title", "author", "genre", "year", "amount"];
    const headers: string[] = ["ISBN", "Título", "Autor", "Género", "Año", "Cantidad"];

    const [genreId, setGenreId] = useState<number>(0);
    const [page, setPage] = useState<number>(Number(localStorage.getItem("pageBook")) || 1);
    const [next, setNext] = useState<boolean>(false);

    useEffect(() => {
        async function fetchBooks() {
            setLoading(true);
            try {
                const response = await axiosInstance.get("/Books/summary", {
                    params: {
                        page: page,
                        genreId: genreId,
                    },
                });
                setBooks(response.data.data);
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

    return (
        <>
            <NavTableButtons
                next={next}
                page={page}
                setGenreId={setGenreId}
                genreId={genreId}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
            {
                loading ? (
                    <SkeletonTable columns={columns.length + 1} />
                ) : (
                    <BooksTable
                        columns={columns}
                        headers={headers}
                        data={books}
                    />
                )
            }
        </>
    );
};

export default Books;
