"use client"

import Image from "next/image";
import { useState } from "react";
import InputBook from "../_components/Form/InputBook";
import { BookSelector, StudentSelector } from "@/types/responses";
import InputStudent from "../_components/Form/InputStudent";
import { zodResolver } from "@hookform/resolvers/zod";
import { loanSchema } from "@/schemas/loanSchema";
import { LoanForm } from "@/types/requests";
import { FieldErrors, useForm } from "react-hook-form";

export default function AddLoan() {

  const [bookOptions, setBookOptions] = useState<BookSelector[]>([]);
  const [studentOptions, setStudentOptions] = useState<StudentSelector[]>([]);

  const { register, handleSubmit } = useForm<LoanForm>({
    resolver: zodResolver(loanSchema)
  })

  const onSuccess = (data: LoanForm) => {
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
        <h2 className="text-2xl text-center text-white font-bold my-4">Registrar Préstamo</h2>
        <Image
          src="/UTMA.svg"
          alt="Logo"
          width={120}
          height={120}
          className="m-auto mb-4"
        />
        <form className="space-y-3 overflow-y-hidden" onSubmit={handleSubmit(onSuccess, onError)}>
          <div
            className="mx-4"
          >
            <label htmlFor="studentId" className="text-white text-sm">Estudiante</label>
            <InputStudent
              setStudentOptions={setStudentOptions}
            />
            <select
              id="studentId"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("studentId")}
            >
              {
                studentOptions.length > 0 ? (
                  studentOptions.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No hay resultados
                  </option>
                )
              }
            </select>
          </div>
          <div
            className="mx-4"
          >
            <label htmlFor="bookIsbn" className="text-white text-sm">Libro</label>
            <InputBook
              setBookOptions={setBookOptions}
            />
            <select
              id="bookIsbn"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("bookIsbn")}
            >
              {
                bookOptions.length > 0 ? (
                  bookOptions.map((book) => (
                    <option key={book.isbn} value={book.isbn}>
                      {book.title}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No hay resultados
                  </option>
                )
              }
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-5/6 bg-[#6DA5C0] rounded-md py-2 text-white font-bold my-4 hover:bg-[#5d8a99] transition"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
