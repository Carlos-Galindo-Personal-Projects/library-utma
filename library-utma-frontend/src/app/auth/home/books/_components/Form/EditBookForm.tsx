import Image from 'next/image'
import { FC } from 'react'
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema } from "@/schemas/bookSchema";
import { BookForm } from '@/types/requests';
import { useRouter } from 'next/navigation';
import GenreSelector from './GenreSelector';
import { AxiosError } from 'axios';
import axiosInstance from '@/axios/axios';
import { EditBookFormProps } from '@/types/components';

const EditBookForm: FC<EditBookFormProps> = ({book, genres}) => {

    const router = useRouter();

    const { register, handleSubmit } = useForm<BookForm>({
        resolver: zodResolver(bookSchema),
    });

    const onSubmit = async (data: BookForm) => {
        try {

            const { genreId, author, amount, title, year } = data;

            const updatedBook = {
                genreId,
                author,
                amount,
                title,
                year
            }

            const response = await axiosInstance.put(`/Books/${book.isbn}`, updatedBook);
            alert(response.data.message);
            router.push("/auth/home/books");
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data);
                return;
            }
            alert("Ha ocurrido un error desconocido");
        }
    };

    const onError = (errors: FieldErrors) => {
        Object.keys(errors).forEach((key) => {
            alert(errors[key]?.message);
        });
    };

    return (
        <div className="w-1/3 bg-[#0F907C] rounded-lg shadow-lg">
            <h2 className="text-2xl text-center text-white font-bold my-4">Editar Libro</h2>
            <Image
                src="/UTMA.svg"
                alt="Logo"
                width={120}
                height={120}
                className="m-auto mb-4"
                priority={true}
            />
            <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-3 overflow-y-hidden">
                <div className="mx-4">
                    <label htmlFor="isbn" className="text-white text-sm">ISBN</label>
                    <input
                        type="text"
                        id="isbn"
                        className="w-full rounded-md h-8 px-3 text-black mt-1"
                        defaultValue={book.isbn}
                        readOnly
                        {...register("isbn")}
                    />
                </div>
                <div className="mx-4">
                    <label htmlFor="title" className="text-white text-sm">Título</label>
                    <input
                        type="text"
                        id="title"
                        className="w-full rounded-md h-8 px-3 text-black mt-1"
                        defaultValue={book.title}
                        {...register("title")}
                    />
                </div>
                <div className="mx-4">
                    <label htmlFor="author" className="text-white text-sm">Autor</label>
                    <input
                        type="text"
                        id="author"
                        className="w-full rounded-md h-8 px-3 text-black mt-1"
                        defaultValue={book.author}
                        {...register("author")}
                    />
                </div>
                <GenreSelector defaultValue={book.genreId} genres={genres} register={register} />
                <div className="mx-4">
                    <label htmlFor="year" className="text-white text-sm">Año</label>
                    <input
                        type="number"
                        min={1800}
                        id="year"
                        className="w-full rounded-md h-8 px-3 text-black mt-1"
                        defaultValue={book.year}
                        {...register("year", { setValueAs: (value) => Number(value) })}
                    />
                </div>
                <div className="mx-4">
                    <label htmlFor="amount" className="text-white text-sm">Cantidad</label>
                    <input
                        type="number"
                        min={1}
                        id="amount"
                        className="w-full rounded-md h-8 px-3 text-black mt-1"
                        defaultValue={book.amount}
                        {...register("amount", { setValueAs: (value) => Number(value) })}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-5/6 bg-[#6DA5C0] rounded-md py-2 text-white font-bold my-4 hover:bg-[#5d8a99] transition"
                    >
                        Actualizar Libro
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditBookForm
