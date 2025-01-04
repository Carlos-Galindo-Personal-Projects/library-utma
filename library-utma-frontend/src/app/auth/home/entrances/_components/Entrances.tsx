"use client";

import { FC, useEffect, useState } from "react";
import EntrancesTable from "./Table/EntrancesTable";
import NavTableButtons from "../../_components/FiltersTable";
import { EntranceRecord } from "@/types/responses";
import { AxiosError } from "axios";
import axiosInstance from "@/axios/axios";
import { numberColumnsEntrances as columns } from "@/utils/tableHeaders";
import SkeletonTable from "../../_components/UI/CustomTableSkeleton";

const Entrances: FC<{ currentPage: number }> = ({ currentPage }) => {

    const [page, setPage] = useState<number>(currentPage);
    const [next, setNext] = useState<boolean>(false);
    const [entrances, setEntrances] = useState<EntranceRecord[]>([]);
    const [isInside, setIsInside] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchEntrances = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/Activities", {
                    params: {
                        page: page,
                        isInside
                    }
                });
                setEntrances(response.data.activities);
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

        fetchEntrances();
    }, [page, isInside])

    if (loading) {
        return <SkeletonTable columns={columns + 1} />
    }

    return (
        <>
            <div className="flex justify-center items-center px-4 space-x-4 mb-6">
                <label className="text-white" htmlFor="isInside">Dentro de la biblioteca</label>
                <input type="checkbox" id="isInside" checked={isInside} onChange={() => setIsInside(!isInside)} />
            </div>
            <NavTableButtons
                next={next}
                currentPage={page}
                setCurrentPage={setPage}
                route="/auth/home/entrances/filter/"
            />
            <EntrancesTable
                data={entrances}
                setPage={setPage}
            />
        </>
    );
};

export default Entrances;
