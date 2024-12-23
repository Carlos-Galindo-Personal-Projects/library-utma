"use client"

import axiosInstance from "@/axios/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const ButtonManagement = () => {

    const router = useRouter();

    const handleClick = async () => {
        if(confirm("¿Estás seguro de querer eliminar estos datos?")){
            try {
                const response = await axiosInstance.delete("/Users/maintenance");
                console.log(response.data);
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
    }

    return (
        <button
            className="text-white bg-red-600 hover:bg-red-700 active:bg-red-800 focus:ring-2 focus:ring-red-300 focus:outline-none p-1 transition text-lg px-16 py-1 rounded-xl shadow-md"
            onClick={handleClick}
        >
            Eliminar Datos
        </button>
    )
}

export default ButtonManagement
