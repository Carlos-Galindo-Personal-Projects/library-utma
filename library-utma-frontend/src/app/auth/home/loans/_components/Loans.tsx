'use client'

import {  useEffect, useState } from "react";
import LoansTable from "./Table/LoansTable"
import NavTableButtons from "../../_components/FiltersTable";
import { LoanRecord } from "@/types/responses";
import axiosInstance from "@/axios/axios";
import { AxiosError } from "axios";
import { numberColumnsLoans as columns } from "@/utils/tableHeaders";
import SkeletonTable from "../../_components/UI/CustomTableSkeleton";

const Loans = () => {

    const [loans, setLoans] = useState<LoanRecord[]>([]);
    const [page, setPage] = useState<number>(Number(localStorage.getItem("pageLoan")) || 1);
    const [next, setNext] = useState<boolean>(false);
    const [isReturned, setIsReturned] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchBooks() {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/Loans", {
                    params: {
                        page,
                        isReturned,
                    },
                });
                setLoans(response.data.loans);
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
    }, [page, isReturned]);

    const handlePrevious = () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            setNext(true);
            localStorage.setItem("pageLoan", newPage.toString());
        }
    };

    const handleNext = () => {
        if (next) {
            const newPage = page + 1;
            setPage(newPage);
            localStorage.setItem("pageLoan", newPage.toString());
        }
    };

    if (loading) return <SkeletonTable columns={columns + 1} />


    return (
        <>
            <div className="flex justify-center items-center px-4 space-x-4 mb-6">
                <label className="text-white" htmlFor="isReturned">Libros devueltos</label>
                <input type="checkbox" id="isReturned" checked={isReturned} onChange={() => setIsReturned(!isReturned)} />
            </div>
            <NavTableButtons
                next={next}
                page={page}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
            <LoansTable
                data={loans}
                setPage={setPage}
            />
        </>

    );
};

export default Loans;
