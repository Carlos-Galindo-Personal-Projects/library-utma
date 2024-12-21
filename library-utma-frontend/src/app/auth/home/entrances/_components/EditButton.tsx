"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"

const ExitButton: FC<{ id: number }> = ({ id }) => {

    const router = useRouter();

    const handleClick = () => {
        alert(`Salida marcada para la actividad con ID: ${id}`);
        router.refresh();
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
