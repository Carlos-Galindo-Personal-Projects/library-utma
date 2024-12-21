"use client"

import { useRouter } from "next/navigation";
import axiosInstance from "@/axios/axios";
import { AxiosError } from "axios";

const LogoutButton = () => {

    const Router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post("/Users/Logout");
            alert(response.data.message);
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data);
            }
        } finally {
            Router.push("/login");
        }
    }

    return (
        <button
            onClick={handleLogout}
            className="w-full text-left py-2 px-4 text-red-600 hover:bg-gray-100 transition"
        >
            Cerrar sesión
        </button>
    )
}

export default LogoutButton
