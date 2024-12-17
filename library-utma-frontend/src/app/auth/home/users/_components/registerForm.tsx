"use client";

import { FieldErrors, useForm } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/registerSchema";
import { UserRegister } from "@/types/types";

export default function RegisterForm() {

  const { register, handleSubmit } = useForm<UserRegister>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: UserRegister) => {
    alert("Usuario registrado");
    console.log(data);
  }

  const onError = (errors: FieldErrors) => {
    Object.keys(errors).forEach(key => {
      alert(errors[key]?.message);
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md bg-[#0F907C] rounded-lg p-4 shadow-lg">
        <h2 className="text-2xl text-center text-white font-bold mb-4">Registrar</h2>
        <Image
          src="/UTMA.svg"
          alt="Logo"
          width={120}
          height={120}
          className="m-auto mb-4"
        />
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-3">
          <div>
            <label htmlFor="name" className="text-white text-sm">Nombre completo</label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white text-sm">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white text-sm">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("password")}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-white text-sm">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("confirmPassword")}
            />
          </div>
          <div>
            <label htmlFor="userTypeId" className="text-white text-sm">Tipo de usuario</label>
            <select
              id="userTypeId"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("userTypeId", {
                setValueAs: value => Number(value)
              })}
            >
              <option value="1">Administrador</option>
              <option value="2">Usuario</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6DA5C0] rounded-md py-2 text-white font-bold mt-4 hover:bg-[#5d8a99] transition"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
