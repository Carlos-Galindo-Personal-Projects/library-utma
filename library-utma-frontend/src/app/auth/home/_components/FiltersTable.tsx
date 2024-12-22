"use client";

import { FC } from "react";
import SelectorGenreFilter from "../books/_components/Table/SelectorGenreFilter";
import { FilterTableProps } from "@/types/components";

const FiltersTable: FC<FilterTableProps> = ({ next, page, genreId, setGenreId, handlePrevious, handleNext }) => {

    return (
        <>
            <SelectorGenreFilter genreId={genreId} setGenreId={setGenreId} />
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
        </>
    );
};

export default FiltersTable;

