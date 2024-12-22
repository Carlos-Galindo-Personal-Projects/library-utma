"use client"
import { booksForm } from "@/mocks/books";
import { bookSchema } from "@/schemas/bookSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import { useParams, useRouter } from "next/navigation";
import { FieldErrors, useForm } from "react-hook-form";
import { genres } from "@/mocks/genres";
import { BookForm } from "@/types/requests";

const EditBook = () => {

    const router = useRouter();

    const { register, handleSubmit } = useForm<BookForm>({
        resolver: zodResolver(bookSchema)
    });

    const onSubmit = (data: BookForm) => {
        alert(`El libro ${data.title} ha sido actualizado correctamente`);
        router.push("/auth/home/books");
    }

    const onError = (errors: FieldErrors) => {
        Object.keys(errors).forEach(key => {
            alert(errors[key]?.message);
        });
    }
    const { isbn } = useParams();

    const book = booksForm.find((book) => book.isbn === isbn);

    if (!book) {
        return (
            <div className="flex justify-center items-center h-48">
                <p className="text-2xl font-semibold text-gray-500">Libro no encontrado</p>
            </div>
        )
    }

    const validBook: BookForm = book;

    return (
        <div className="flex flex-col items-center justify-center my-12">
            <div className="w-1/3 bg-[#0F907C] rounded-lg shadow-lg">
                <h2 className="text-2xl text-center text-white font-bold my-4">Agregar Libro</h2>
                <Image
                    src="/UTMA.svg"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="m-auto mb-4"
                />
                <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-3 overflow-y-hidden">
                    <div className="mx-4">
                        <label htmlFor="isbn" className="text-white text-sm">ISBN</label>
                        <input
                            type="text"
                            id="isbn"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            defaultValue={validBook.isbn}
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
                            defaultValue={validBook.title} // Prellena el título con el valor del libro encontrado
                            {...register("title")}
                        />
                    </div>
                    <div className="mx-4">
                        <label htmlFor="author" className="text-white text-sm">Autor</label>
                        <input
                            type="text"
                            id="author"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            defaultValue={validBook.author} // Prellena el autor con el valor del libro encontrado
                            {...register("author")}
                        />
                    </div>
                    <div className="mx-4">
                        <label htmlFor="genreId" className="text-white text-sm">Género</label>
                        <select
                            id="genreId"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            defaultValue={validBook.genreId}
                            {...register("genreId", { setValueAs: value => Number(value) })}
                        >
                            <option value="">Selecciona un género</option>
                            {genres.length > 0 ? genres.map((genre) => (
                                <option key={genre.id} value={genre.id}>{genre.name}</option>
                            )) : (
                                <option value="">No hay géneros disponibles</option>
                            )}
                        </select>
                    </div>
                    <div className="mx-4">
                        <label htmlFor="year" className="text-white text-sm">Año</label>
                        <input
                            type="number"
                            min={1800}
                            id="year"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            defaultValue={validBook.year} // Prellena el año
                            {...register("year", { setValueAs: value => Number(value) })}
                        />
                    </div>
                    <div className="mx-4">
                        <label htmlFor="amount" className="text-white text-sm">Cantidad</label>
                        <input
                            type="number"
                            min={1}
                            id="amount"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            defaultValue={validBook.amount} // Prellena la cantidad
                            {...register("amount", { setValueAs: value => Number(value) })}
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
        </div>
    );
};

export default EditBook;
