"use client"

import Image from "next/image";
import Link from "next/link";
import UserIcon from "./UserIcon";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {

    const Router = useRouter();

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleLogout = () => {
        alert("Sesión cerrada");
        setIsDropdownOpen(false);
        Router.push("/");
    }

    return (
        <div className="flex justify-between items-center h-20 bg-[#0F907C] text-white shadow-lg px-3">
            <div className="flex items-center space-x-4">
                <Link href="/auth/home">
                    <Image
                        src="/UTMA.svg"
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                </Link>
                <h2 className="text-xl font-semibold tracking-wide">
                    Biblioteca UTMA
                </h2>
            </div>

            <div className="flex items-center space-x-4">
                <p className="text-sm">
                    Hola, <span className="font-semibold">Admin</span>
                </p>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${isDropdownOpen ? "bg-[#074d47]" : "hover:bg-[#074d47]"}`}
                    >
                        <UserIcon isDropdownOpen={isDropdownOpen} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                            <button
                                onClick={handleLogout}
                                className="w-full text-left py-2 px-4 text-red-600 hover:bg-gray-100 transition"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
