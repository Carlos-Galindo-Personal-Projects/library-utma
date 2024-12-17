"use client"

import { FieldErrors, useForm } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/userSchema";
import { UserLogin } from "@/types/types";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const router = useRouter();

    const { register, handleSubmit } = useForm<UserLogin>({
        resolver: zodResolver(userSchema)
    });

    const onSubmit = (data: UserLogin) => {
        alert("Sesión iniciada");
        console.log(data);
        router.push("/auth/home");
    }

    const onError = (errors: FieldErrors) => {
        Object.keys(errors).forEach(key => {
            alert(errors[key]?.message);
        });
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-md bg-[#0F907C] rounded-lg p-6 shadow-lg">
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
        </div>
    );
}

