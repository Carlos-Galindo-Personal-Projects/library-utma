"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"
import { EditLoanButtonProps } from "@/types/components";
import axiosInstance from "@/axios/axios";
import { AxiosError } from "axios";

const CheckDevolutionButton: FC<EditLoanButtonProps> = ({ id, setPage }) => {

    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await axiosInstance.put(`/Loans/${id}`);
            alert(response.data.message);
            setPage(1);
            router.refresh();
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data)
                return
            }
            alert("Ha ocurrido un error");
        }
    }

    return (
        <button className="text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded p-1 transition"
            onClick={handleClick}
        >
            Marcar Devolución
        </button>
    )
}

export default CheckDevolutionButton
