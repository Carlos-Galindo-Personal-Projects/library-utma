"use client"

import React, { useState } from 'react'
import UserIcon from './Icons/UserIcon';
import LogoutButton from './LogoutButton';

const ToggleDown = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${isDropdownOpen ? "bg-[#072E33]" : "hover:bg-[#072E33]"}`}
                id='logout'
                aria-label='Cerrar sesión'
            >
                <UserIcon isDropdownOpen={isDropdownOpen} />
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                    <LogoutButton />
                </div>
            )}
        </div>
    )
}

export default ToggleDown
