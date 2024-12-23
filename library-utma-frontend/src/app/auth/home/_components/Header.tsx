import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import ToggleDown from "./ToggleDown";

export default async function Header() {

    const head = await headers();

    const nameHeaders = head.get('name');

    return (
        <div className="flex justify-between items-center bg-[#0F907C] text-white px-8 py-1">
            <div className="flex items-center space-x-4">
                <Link href="/auth/home">
                    <Image
                        src="/UTMA.svg"
                        alt="Logo"
                        width={60}
                        height={60}
                        priority={true}
                    />
                </Link>
                <h2 className="text-xl font-semibold tracking-wide">
                    Biblioteca UTMA
                </h2>
            </div>

            <div className="flex items-center space-x-4">
                <p className="text-sm">
                    Hola, <span className="font-semibold">{nameHeaders}</span>
                </p>
                <ToggleDown />
            </div>
        </div>
    );
}
