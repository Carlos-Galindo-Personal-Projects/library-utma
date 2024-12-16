import { FC } from "react"

const DatabaseIcon : FC<{isActive : boolean}> = ({isActive}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={60}
            height={60}
            viewBox="0 0 512 512"
            fill={isActive ? "#ffffff" : "#000000"}
        >
            <path
                d="M459.991 82.262c-5.818-13.388-15.866-24.916-28.61-34.854-19.179-14.896-44.758-26.522-74.674-34.691C326.789 4.575 292.498 0 256 0c-55.622.036-106.071 10.548-143.848 28.374-18.889 8.959-34.692 19.76-46.31 32.713-5.791 6.48-10.52 13.542-13.832 21.176-3.304 7.634-5.146 15.866-5.138 24.29V405.44c-.008 8.423 1.834 16.665 5.138 24.29 5.818 13.388 15.866 24.915 28.61 34.863 19.18 14.896 44.757 26.523 74.675 34.692C185.211 507.425 219.503 511.992 256 512c55.632-.046 106.07-10.546 143.848-28.383 18.888-8.958 34.691-19.751 46.309-32.712 5.792-6.472 10.52-13.534 13.833-21.176 3.304-7.624 5.146-15.867 5.137-24.29V106.552c.01-8.424-1.832-16.656-5.136-24.29zM436.282 405.44c-.009 4.293-.889 8.478-2.768 12.843-3.268 7.597-9.849 15.766-19.861 23.545-14.967 11.7-37.369 22.257-64.526 29.626-27.158 7.388-59.054 11.709-93.128 11.7-51.909.046-98.818-10.084-131.503-25.606-16.357-7.715-29.064-16.774-37.142-25.86-4.066-4.538-6.989-9.058-8.868-13.406-1.88-4.366-2.76-8.55-2.769-12.843v-49.36c16.684 15.25 40.111 27.43 68.13 36.435 32.304 10.32 70.789 16.247 112.152 16.256 55.16-.027 105.164-10.493 142.306-28.029 14.931-7.08 27.693-15.368 37.976-24.798v49.497zm0-84.242c-2.051 4.402-4.983 8.814-8.94 13.27-12.78 14.396-35.917 27.948-65.77 37.442-29.844 9.548-66.287 15.23-105.572 15.222-52.372.027-99.726-10.14-133.046-25.95-16.674-7.87-29.763-17.137-38.294-26.714-3.958-4.456-6.89-8.868-8.942-13.26v-64.754c16.684 15.249 40.111 27.43 68.13 36.434 32.304 10.311 70.789 16.238 112.152 16.248 55.16-.028 105.164-10.492 142.306-28.03 14.931-7.08 27.693-15.357 37.976-24.788v64.88zm0-99.626c-2.051 4.402-4.983 8.813-8.94 13.261-12.78 14.395-35.917 27.956-65.77 37.441-29.844 9.549-66.287 15.231-105.572 15.222-52.372.028-99.726-10.138-133.046-25.941-16.674-7.87-29.763-17.146-38.294-26.722-3.958-4.448-6.89-8.859-8.942-13.261v-64.754c16.684 15.258 40.111 27.43 68.13 36.443 32.304 10.32 70.789 16.247 112.152 16.247 55.16-.027 105.164-10.484 142.306-28.029 14.931-7.08 27.693-15.358 37.976-24.789v64.882zm0-99.636c-2.051 4.403-4.983 8.823-8.94 13.271-12.78 14.405-35.917 27.956-65.77 37.451-29.844 9.548-66.287 15.23-105.572 15.222-52.372.027-99.726-10.14-133.046-25.95-16.674-7.879-29.763-17.147-38.294-26.722-3.958-4.448-6.89-8.868-8.942-13.262v-15.394c.01-4.294.89-8.469 2.769-12.835 3.268-7.607 9.848-15.766 19.86-23.554 14.968-11.7 37.369-22.256 64.526-29.617 27.158-7.398 59.053-11.709 93.127-11.7 51.91-.046 98.819 10.085 131.504 25.606 16.356 7.706 29.054 16.765 37.142 25.86 4.066 4.538 6.988 9.05 8.868 13.406 1.878 4.366 2.758 8.541 2.768 12.835v15.383z"
            />
        </svg>
    )
}

export default DatabaseIcon
