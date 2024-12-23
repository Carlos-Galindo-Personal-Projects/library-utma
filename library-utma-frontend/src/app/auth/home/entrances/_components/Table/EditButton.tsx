"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"
import { AxiosError } from "axios";
import axiosInstance from "@/axios/axios";

const ExitButton: FC<{ id: number }> = ({ id }) => {

    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await axiosInstance.put(`/Activities/${id}`);
            alert(response.data.message);
            router.refresh();
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data);
                return;
            }
            alert("Ha ocurrido un error");
        }
    }

    return (
        <button className="text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded p-1 transition"
            onClick={handleClick}
        >
            Marcar Salida
        </button>
    )
}

export default ExitButton
