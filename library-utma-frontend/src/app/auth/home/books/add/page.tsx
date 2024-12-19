"use client"

import Image from "next/image";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema } from "@/schemas/bookSchema";
import { FormBook } from "@/types/types";

export default function AddBook() {

    const { register, handleSubmit } = useForm<FormBook>({
        resolver: zodResolver(bookSchema)
    });

    const onSubmit = (data: FormBook) => {
        alert("Libro registrado");
        console.log(data);
    }

    const onError = (errors: FieldErrors) => {
        Object.keys(errors).forEach(key => {
            alert(errors[key]?.message);
        });
    }

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
                    <div
                        className="mx-4"
                    >
                        <label htmlFor="isbn" className="text-white text-sm">ISBN</label>
                        <input
                            type="text"
                            id="isbn"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            {...register("isbn")}
                        />
                    </div>
                    <div
                        className="mx-4"
                    >
                        <label htmlFor="title" className="text-white text-sm">Título</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            {...register("title")}
                        />
                    </div>
                    <div
                        className="mx-4"
                    >
                        <label htmlFor="author" className="text-white text-sm">Autor</label>
                        <input
                            type="text"
                            id="author"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            {...register("author")}
                        />
                    </div>
                    <div
                        className="mx-4"
                    >
                        <label htmlFor="genreId" className="text-white text-sm">Género</label>
                        <select
                            id="genreId"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            {...register("genreId", {
                                setValueAs: value => Number(value)
                            })}
                        >
                            <option value="">Selecciona un género</option>
                            <option value="1">Ciencia Ficción</option>
                            <option value="2">Fantasía</option>
                            <option value="3">Terror</option>
                            <option value="4">Romance</option>
                            <option value="5">Aventura</option>
                            <option value="6">Biografía</option>
                            <option value="7">Historia</option>
                            <option value="8">Política</option>
                            <option value="9">Economía</option>
                            <option value="10">Autoayuda</option>
                        </select>
                    </div>
                    <div
                        className="mx-4"
                    >
                        <label htmlFor="year" className="text-white text-sm">Año</label>
                        <input
                            type="number"
                            min={1800}
                            id="year"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            {...register("year", {
                                setValueAs: value => Number(value)
                            })}
                        />
                    </div>
                    <div
                        className="mx-4"
                    >
                        <label htmlFor="amount" className="text-white text-sm">Cantidad</label>
                        <input
                            type="number"
                            min={1}
                            id="amount"
                            className="w-full rounded-md h-8 px-3 text-black mt-1"
                            {...register("amount", {
                                setValueAs: value => Number(value)
                            })}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-5/6 bg-[#6DA5C0] rounded-md py-2 text-white font-bold my-4 hover:bg-[#5d8a99] transition"
                        >
                            Agregar Libro
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
