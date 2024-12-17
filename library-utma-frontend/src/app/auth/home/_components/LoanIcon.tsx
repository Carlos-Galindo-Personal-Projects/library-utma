import { FC } from "react"

const LoanIcon: FC <{isActive : boolean}> = ({isActive}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 0 1024 1024"
            className={`cursor-pointer transition-colors duration-150 ${
                isActive ? "fill-white" : "fill-black hover:fill-gray-300"
            }`}
        >
            <path

                // fill={isActive ? "#ffffff" : "#000000"}
                d="M853.333 853.333c-147.2 0-341.333 85.334-341.333 85.334V469.333S704 384 896 384l-42.667 469.333z"
            />
            <path
                // fill={isActive ? "#ffffff" : "#000000"}
                d="M170.667 853.333c147.2 0 341.333 85.334 341.333 85.334V469.333S320 384 128 384l42.667 469.333z"
            />
            <path
                // fill={isActive ? "#ffffff" : "#000000"}
                d="M341.33299999999997 256a170.667 170.667 0 1 0 341.334 0 170.667 170.667 0 1 0-341.334 0ZM874.667 682.667H896c12.8 0 21.333-8.534 21.333-21.334V576c0-12.8-8.533-21.333-21.333-21.333h-21.333c-36.267 0-64 27.733-64 64s27.733 64 64 64zm-725.334-128H128c-12.8 0-21.333 8.533-21.333 21.333v85.333c0 12.8 8.533 21.334 21.333 21.334h21.333c36.267 0 64-27.734 64-64s-27.733-64-64-64z"
            />
        </svg>
    )
}

export default LoanIcon
