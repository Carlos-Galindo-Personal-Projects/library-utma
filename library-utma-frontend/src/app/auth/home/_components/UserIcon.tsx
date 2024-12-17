import React, { FC } from "react";

const UserIcon: FC<{ isDropdownOpen: boolean }> = ({ isDropdownOpen }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="none"
            viewBox="0 0 16 16"
            className={`cursor-pointer transition-colors duration-150 ${
                isDropdownOpen ? "fill-white" : "fill-black hover:fill-gray-300"
            }`}
        >
            <path
                d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 12a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3h12v-3Z"
            />
        </svg>
    );
};

export default UserIcon;

