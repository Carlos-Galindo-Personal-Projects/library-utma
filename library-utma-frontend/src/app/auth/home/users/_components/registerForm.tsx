"use client";

import { FieldErrors, useForm } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/registerSchema";
import { UserRegister } from "@/types/requests";

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
    <div className="flex flex-col items-center justify-center my-12">
      <div className="w-1/3 bg-[#0F907C] rounded-lg shadow-lg">
        <h2 className="text-2xl text-center text-white font-bold my-4">Registrar</h2>
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
            <label htmlFor="name" className="text-white text-sm">Nombre completo</label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("name")}
            />
          </div>
          <div
            className="mx-4"
          >
            <label htmlFor="email" className="text-white text-sm">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("email")}
            />
          </div>
          <div
            className="mx-4"
          >
            <label htmlFor="password" className="text-white text-sm">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("password")}
            />
          </div>
          <div
            className="mx-4"
          >
            <label htmlFor="confirmPassword" className="text-white text-sm">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("confirmPassword")}
            />
          </div>
          <div
            className="mx-4"
          >
            <label htmlFor="userTypeId" className="text-white text-sm">Tipo de usuario</label>
            <select
              id="userTypeId"
              className="w-full rounded-md h-8 px-3 text-black mt-1"
              {...register("userTypeId", {
                setValueAs: value => Number(value)
              })}
            >
              <option value="">Selecciona un tipo de usuario</option>
              <option value="1">Administrador</option>
              <option value="2">Usuario</option>
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
