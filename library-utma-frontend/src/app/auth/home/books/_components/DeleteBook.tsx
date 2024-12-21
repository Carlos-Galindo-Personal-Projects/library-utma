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
        <button className="text-white bg-red-500 rounded p-1"
            onClick={handleClick}
        >
            Eliminar
        </button>
    )
}

export default DeleteBook
