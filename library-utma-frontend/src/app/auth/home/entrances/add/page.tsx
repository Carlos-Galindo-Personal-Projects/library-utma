'use client'

import Image from "next/image";
import InputStudent from "../../loans/_components/Form/InputStudent";
import { useState } from "react";
import { StudentSelector } from "@/types/responses";
import StudentSelects from "../../loans/_components/Form/StudentSelects";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import entranceSchema from "@/schemas/entranceSchema";
import { EntranceForm } from "@/types/requests";
import axiosInstance from "@/axios/axios";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

export default function AddEntrance() {

    const router = useRouter();

    const [studentOptions, setStudentOptions] = useState<StudentSelector[]>([]);

    const { register, handleSubmit } = useForm<EntranceForm>({
        resolver: zodResolver(entranceSchema)
    })

    const onSuccess = async (data: EntranceForm) => {
        try {
            const response = await axiosInstance.post("/Activities", data);
            alert(response.data.message);
            router.push("/auth/home/entrances");
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data);
                return;
            }
            alert("Ha ocurrido un error");
        }
    }

    const onError = (errors: FieldErrors) => {
        Object.keys(errors).forEach(key => {
            alert(errors[key]?.message);
        });
    }

    return (
        <div className="flex flex-col items-center justify-center my-12">
            <div className="w-1/3 bg-[#0F907C] rounded-lg shadow-lg">
                <h2 className="text-2xl text-center text-white font-bold my-4">Registrar Entrada</h2>
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
                        <StudentSelects
                            studentOptions={studentOptions}
                            register={register}
                        />
                    </div>
                    <div
                        className="mx-4"
                    >
                        <label htmlFor="description" className="text-white text-sm">Razón</label>
                        <textarea
                            {...register("description")}
                            className="w-full rounded-md bg-[#F3F3F3] p-2 text-black"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-5/6 bg-[#6DA5C0] rounded-md py-2 text-white font-bold my-4 hover:bg-[#5d8a99] transition"
                        >
                            Registrar Entrada
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
