"use client"

import { FC } from "react";
import Link from "next/link";

const EditButton: FC<{ isbn: `${number}-${number}-${number}-${number}-${number}` }> = ({ isbn }) => {

    return (
        <Link href={`/auth/home/books/edit/${isbn}`}>
            <button
                className="text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded p-1 transition"
                type="button"
            >
                Editar
            </button>
        </Link>
    );
};

export default EditButton;
