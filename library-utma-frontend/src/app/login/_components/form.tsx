"use client"

import { FieldErrors, useForm } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/userSchema";
import { UserLogin } from "@/types/types";
import { useRouter } from "next/navigation";

export default function LoginForm(){

    const router = useRouter();

    const { register, handleSubmit } = useForm<UserLogin>({
        resolver: zodResolver(userSchema)
    });

    const onsubmit = (data: UserLogin) => {
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
        <div
            className="w-1/4 h-5/6 bg-[#0F907C] rounded-lg"
        >
            <h2
                className="text-4xl text-center pt-6 font-bold"
            >Iniciar sesión</h2>
            <Image
                src="/UTMA.svg"
                alt="Logo"
                width={150}
                height={150}
                className="m-auto my-4"
            />
            <form onSubmit={handleSubmit(onsubmit, onError)}>
                <div
                    className="w-11/12 m-auto flex flex-col py-2"
                >
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        className="rounded-md h-8 pl-1 text-black"
                        {...register("email")}
                    />
                </div>
                <div
                    className="w-11/12 m-auto flex flex-col py-2"
                >
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        className="rounded-md h-8 pl-1 text-black"
                        {...register("password")}
                    />
                </div>
                <div
                    className="w-5/6 m-auto"
                >
                    <button
                        className="bg-[#6DA5C0] rounded-md font-bold w-full py-1 my-8"
                        type="submit"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    );
}
