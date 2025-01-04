"use client";

import { useState, useEffect, FC } from "react";
import BooksTable from "./Table/BooksTable";
import NavTableButtons from "../../_components/FiltersTable";
import { AxiosError } from "axios";
import axiosInstance from "@/axios/axios";
import { BookRecord, Genre } from "@/types/responses";
import SelectorGenreFilter from "./Table/SelectorGenreFilter";
import SkeletonTable from "../../_components/UI/CustomTableSkeleton";
import { numberColumnsBooks as columns } from "@/utils/tableHeaders";

const Books: FC<{genres: Genre[]; page: number; genreId: number}> = ({ genres, page, genreId }) => {

    const [books, setBooks] = useState<BookRecord[]>([]);
    const [currentGenreId, setCurrentGenreId] = useState<number>(genreId);
    const [currentPage, setCurrentPage] = useState<number>(page);
    const [next, setNext] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchBooks() {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/Books/summary", {
                    params: {
                        page: currentPage,
                        genreId: currentGenreId,
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

    if ( loading ) return (
        <SkeletonTable columns={columns + 1} />
    )

    return (
        <>
            <SelectorGenreFilter
                genres={genres}
                currentGenreId={currentGenreId}
                setCurrentGenreId={setCurrentGenreId}
                page={currentPage}
            />
            <NavTableButtons
                next={next}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentCategoryId={currentGenreId}
            />
            <BooksTable
                data={books}
                setPage={setCurrentPage}
            />
        </>
    );
};

export default Books;
