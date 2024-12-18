import { FC } from "react"

const BookIcon : FC<{isActive: boolean}> = ({isActive}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            fill="none"
            viewBox="0 0 24 24"
            className={`cursor-pointer transition-colors duration-150 ${
                isActive ? "stroke-white" : "stroke-black hover:stroke-gray-300"
            }`}
        >
            <path
                d="M12 6.91c-1.1-1.401-2.796-2.801-6.999-2.904A.491.491 0 0 0 4.5 4.5v12.097c0 .276.225.493.501.502 4.203.137 5.899 2 6.999 3.401m0-13.59c1.1-1.401 2.796-2.801 6.999-2.904a.487.487 0 0 1 .501.489v12.101a.51.51 0 0 1-.501.503c-4.203.137-5.899 2-6.999 3.401m0-13.59V20.5"
            />
            <path
                d="M19.235 6H21.5a.5.5 0 0 1 .5.5v13.039c0 .405-.477.673-.846.51-.796-.354-2.122-.786-3.86-.786C14.353 19.263 12 21 12 21s-2.353-1.737-5.294-1.737c-1.738 0-3.064.432-3.86.785-.37.164-.846-.104-.846-.509V6.5a.5.5 0 0 1 .5-.5h2.265"
            />
        </svg>
    )
}

export default BookIcon
