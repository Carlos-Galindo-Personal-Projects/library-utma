import Image from "next/image"
import Link from "next/link"
import UserIcon from "./UserIcon"

export default function Header() {
    return (
        <div className="flex justify-between items-center h-20 bg-[#0F907C] text-white">
            <div
                className="flex items-center"
            >
                <Link href="/auth/home">

                        <Image
                            src="/UTMA.svg"
                            alt="Logo"
                            width={70}
                            height={70}
                            className="m-4"
                        />
                </Link>
                <h2
                    className="text-2xl font-semibold"
                >
                    Biblioteca UTMA
                </h2>
            </div>

            <div className="mr-8 flex justify-evenly items-center">
                <p>
                    Hola: <span className="font-semibold">Admin</span>
                </p>
                <UserIcon/>
            </div>
        </div>
    )
}
