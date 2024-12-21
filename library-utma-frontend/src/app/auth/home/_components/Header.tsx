"use client"

import Image from "next/image";
import Link from "next/link";
import UserIcon from "./Icons/UserIcon";
import { useState } from "react";
import LogoutButton from "./LogoutButton";

export default function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    return (
        <div className="flex justify-between items-center bg-[#0F907C] text-white px-8 py-1">
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
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${isDropdownOpen ? "bg-[#072E33]" : "hover:bg-[#072E33]"}`}
                    >
                        <UserIcon isDropdownOpen={isDropdownOpen} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                            <LogoutButton />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
