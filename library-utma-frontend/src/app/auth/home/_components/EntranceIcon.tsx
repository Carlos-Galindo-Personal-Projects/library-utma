import { FC } from "react"

const EntranceIcon : FC<{isActive : boolean }> = ({isActive}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={50}
            height={50}
            viewBox="-13.46 0 122.88 122.88"
            fill="none"
            className={`cursor-pointer transition-colors duration-150 ${
                isActive ? "fill-white" : "fill-black hover:fill-gray-300"
            }`}
        >
            <path
                d="M82.16 0h13.33c.25 0 .46.21.46.46v121.96c0 .25-.21.46-.46.46H82.16c-.25 0-.46-.21-.46-.46V56.08l-6.16 2.44-.86.3c-4.96 1.76-8.55 3.03-14.84 1.48-.05-.01-.09-.03-.13-.05-4.4-1.71-6.68-4.08-8.9-6.4l-.33-.34-2.81 17.91c2.51 1.58 5.02 2.75 7.39 3.86 7.2 3.36 13.12 6.12 14.39 17.43.23 2.03.12 3.94.01 6.02v.03c-.02.3-.03.63-.07 1.4l-.88 21.91c-.02.43-.38.76-.8.75l-11.13.03c-.43 0-.78-.35-.78-.78.12-7.55.34-15.46.73-23l.06-1.02c.06-1.18.12-2.27.06-3.29-.06-.97-.24-1.88-.64-2.75l-.11-.23c-.45-.98-.86-1.88-1.48-2.17-1.23-.57-3.18-1.28-5.4-2.01-2.54-.84-5.38-1.68-7.88-2.39-1.84 6.08-4.33 13.44-7 20.43-2.39 6.24-4.92 12.21-7.27 16.74-.14.28-.44.44-.73.42l-11.69.06c-.43 0-.78-.34-.78-.77 0-.1.02-.2.06-.29 2.34-5.75 5.1-13.22 7.75-20.81 2.71-7.77 5.31-15.69 7.23-22.05-1.14-1.4-2.23-2.96-2.97-4.68-.82-1.9-1.22-3.96-.81-6.17l4.01-21.66-.23-.01c-1.39-.06-2.55-.11-3.88.47-1.82.8-3.26 2.42-4.86 4.22-.65.73-1.32 1.49-2.09 2.27l-.05.05c-.57.59-1.17 1.2-1.73 1.77l-7.08 7.15c-.3.3-.79.31-1.1 0L.2 54.25c-.29-.31-.28-.8.02-1.09l7.07-7.14c.61-.62 1.13-1.16 1.64-1.67l.08-.08c3.19-3.48 5.78-6.26 9.1-8.14 3.36-1.9 7.4-2.84 13.42-2.58h.01c2.15.03 4.69.26 6.78.46.97.09 1.84.17 2.59.22 10.16.67 14.92 6.01 18.62 10.17 1.63 1.84 3.05 3.42 4.57 4.15.72.34 1.85-.14 3.14-.68.78-.33 1.6-.68 2.47-.91.56-.21.87-.33 1.11-.42.31-.12.52-.2.64-.24l10.24-3.54V.46c0-.25.21-.46.46-.46zM41.74 6.41c3.18-1.09 6.51-.78 9.31.59 2.8 1.37 5.08 3.82 6.17 7 1.09 3.18.78 6.51-.59 9.31-1.37 2.8-3.82 5.08-7 6.17-3.18 1.09-6.51.78-9.31-.59-2.8-1.37-5.08-3.82-6.17-7-1.09-3.18-.78-6.51.59-9.31 1.37-2.8 3.82-5.08 7-6.17zm43.03 33.3h3.08v14.75h-3.08V39.71z"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                }}
            />
        </svg>
    )
}

export default EntranceIcon
