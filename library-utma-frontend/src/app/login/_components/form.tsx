"use client"

import { FieldErrors, useForm } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/userSchema";
import { useRouter } from "next/navigation";
import axiosInstance from "@/axios/axios";
import { AxiosError } from "axios";
import { UserLogin } from "@/types/requests";

export default function LoginForm() {

    const router = useRouter();

    const { register, handleSubmit } = useForm<UserLogin>({
        resolver: zodResolver(userSchema)
    });

    const onSubmit = async (data: UserLogin) => {
        try {
            const response = await axiosInstance.post("/Users/Login", data);
            alert(response.data.message);
            router.push("/auth/home");
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data);
            }
        }
    }

    const onError = (errors: FieldErrors) => {
        Object.keys(errors).forEach(key => {
            alert(errors[key]?.message);
        });
    }

    return (
        <div className="w-3/10 bg-[#0F907C] rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl text-center text-white font-bold mb-6">Iniciar sesión</h2>
            <Image
                src="/UTMA.svg"
                alt="Logo"
                width={150}
                height={150}
                className="m-auto mb-4"
            />
            <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
                <div>
                    <label htmlFor="email" className="text-white text-sm">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full rounded-md h-10 px-3 text-black mt-1"
                        {...register("email")}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="text-white text-sm">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full rounded-md h-10 px-3 text-black mt-1"
                        {...register("password")}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#6DA5C0] rounded-md py-2 text-white font-bold mt-6 hover:bg-[#5d8a99] transition"
                >
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
}

