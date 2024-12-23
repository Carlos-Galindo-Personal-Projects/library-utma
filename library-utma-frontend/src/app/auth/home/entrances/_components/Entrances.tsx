"use client";

import { Suspense, useState } from "react";
import EntrancesTable from "./Table/EntrancesTable";
import SkeletonTable from "../../_components/UI/CustomTableSkeleton";
import { entrances } from "@/mocks/entrances";
import NavTableButtons from "../../_components/FiltersTable";
import { numberColumnsEntrances as columns } from "@/utils/tableHeaders";

const Entrances = () => {
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

            <NavTableButtons
                next={next}
                page={page}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
            <Suspense fallback={<SkeletonTable columns={columns + 1} />} >
                <EntrancesTable data={entrances} />
            </Suspense>


        </>
    );
};

export default Entrances;
