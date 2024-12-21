import { FC } from "react";
import { useRouter } from "next/navigation";

const EditButton: FC<{ isbn: `${number}-${number}-${number}-${number}-${number}` }> = ({ isbn }) => {

    const router = useRouter();

    return (
        <button
            className="text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded p-1 transition"
            onClick={() => router.push(`/auth/home/books/edit/${isbn}`)}
            type="button"
        >
            Editar
        </button>
    );
};

export default EditButton;
