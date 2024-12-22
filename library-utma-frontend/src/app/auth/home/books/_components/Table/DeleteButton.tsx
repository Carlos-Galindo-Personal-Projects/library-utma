"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"
import { AxiosError } from "axios";
import axiosInstance from "@/axios/axios";
import { DeleteBookButtonProps } from "@/types/components";

const DeleteBook: FC<DeleteBookButtonProps> = ({ isbn, setPage }) => {

    const router = useRouter();

    const handleClick = async () => {
        if(confirm("¿Estás seguro de eliminar este libro?")) {
            try {
                const response = await axiosInstance.delete(`/Books/${isbn}`);
                alert(response.data.message);
                setPage(1);
                localStorage.setItem("pageBook", "1");
                router.refresh();
            } catch (error) {
                if (error instanceof AxiosError) {
                    alert(error.response?.data)
                    return
                }
                alert("Ha ocurrido un error");
            }
        }
    }

    return (
        <button className="text-white bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none rounded p-1 transition"
            onClick={handleClick}
        >
            Eliminar
        </button>
    )
}

export default DeleteBook
