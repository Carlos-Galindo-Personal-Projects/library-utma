"use client";

import { NavTableButtonsProps } from "@/types/types";
import { FC, useEffect } from "react";

const NavTableButtons: FC<NavTableButtonsProps> = ({ next, page, handlePrevious, handleNext }) => {

    useEffect(() => {
        console.log(`Fetching data from page ${page}. Data from ${(page * 10) - 9} to ${page * 10}`);
    }, [page]);

    return (
        <div className="flex justify-center items-center space-x-8">
            <button
                className={`text-2xl bg-[#6DA5C0] transition rounded-lg px-4 font-semibold ${page === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#5d8a99]"
                    }`}
                onClick={handlePrevious}
                disabled={page === 1}
            >
                {`<`}
            </button>

            <button
                className={`text-2xl bg-[#6DA5C0] transition rounded-lg px-4 font-semibold ${!next
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#5d8a99]"
                    }`}
                onClick={handleNext}
                disabled={!next}
            >
                {`>`}
            </button>
        </div>
    );
};

export default NavTableButtons;

