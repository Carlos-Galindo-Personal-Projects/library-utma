"use client";

import { FC } from "react";
import { FilterTableProps } from "@/types/components";
import { useRouter } from "next/navigation";


const FiltersTable: FC<FilterTableProps> = ({ next, currentPage, setCurrentPage, currentCategoryId }) => {

    const router = useRouter();

    const handleDecrease = () => () => {
        if (currentPage > 1) {
            const pastPage = currentPage - 1;
            setCurrentPage(pastPage);
            router.push(`/auth/home/books/filter/${pastPage}/${currentCategoryId}`);
        }
    };

    const handleIncrease = () => () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        router.push(`/auth/home/books/filter/${nextPage}/${currentCategoryId}`);
    };

    return (
        <>
            <div className="flex justify-center items-center space-x-8">
                <button
                    className='text-2xl bg-[#6DA5C0] transition rounded-lg px-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5d8a99]'
                    onClick={handleDecrease()}
                    disabled={currentPage === 1}
                >
                    {`<`}
                </button>

                <button
                    className='text-2xl bg-[#6DA5C0] transition rounded-lg px-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5d8a99]'
                    onClick={handleIncrease()}
                    disabled={!next}
                >
                    {`>`}
                </button>
            </div>
        </>
    );
};

export default FiltersTable;

