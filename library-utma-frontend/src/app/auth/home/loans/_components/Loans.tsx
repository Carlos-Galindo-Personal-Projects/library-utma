'use client'

import {  useEffect, useState } from "react";
import LoansTable from "./Table/LoansTable"
import NavTableButtons from "../../_components/FiltersTable";
import { LoanRecord } from "@/types/responses";
import axiosInstance from "@/axios/axios";
import { AxiosError } from "axios";

const Loans = () => {

    const [loans, setLoans] = useState<LoanRecord[]>([]);
    const [page, setPage] = useState<number>(Number(localStorage.getItem("pageLoan")) || 1);
    const [next, setNext] = useState<boolean>(false);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axiosInstance.get("/Loans", {
                    params: {
                        page
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
            }
        }

        fetchBooks();
    }, [page]);

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

    return (
        <>
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
