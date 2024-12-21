"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"

const CheckDevolutionButton: FC<{ id: number }> = ({ id }) => {

    const router = useRouter();

    const handleClick = () => {
        alert(`Devolución marcada para el préstamo con ID: ${id}`);
        router.refresh();
    }

    return (
        <button className="text-white bg-blue-500 rounded p-1"
            onClick={handleClick}
        >
            Marcar Devolución
        </button>
    )
}

export default CheckDevolutionButton
