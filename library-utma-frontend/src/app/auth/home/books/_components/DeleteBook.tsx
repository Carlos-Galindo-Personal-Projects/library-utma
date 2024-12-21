"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"

const DeleteBook: FC<{ isbn: `${number}-${number}-${number}-${number}-${number}` }> = ({ isbn }) => {

    const router = useRouter();

    const handleClick = () => {
        if(confirm("¿Estás seguro de eliminar este libro?")) {
            alert(`Eliminando libro con ISBN: ${isbn}`);
            router.refresh();
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
