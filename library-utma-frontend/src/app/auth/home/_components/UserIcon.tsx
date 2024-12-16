import React, { FC } from 'react'

const UserIcon: FC<{ color?: boolean }> = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="none"
            viewBox="0 0 16 16"
            className="cursor-pointer ml-4"
        >
            <path
                fill={color ? '#FFFFFF' : "#000000"}
                d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 12a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3h12v-3Z"
            />
        </svg>
    )
}

export default UserIcon
