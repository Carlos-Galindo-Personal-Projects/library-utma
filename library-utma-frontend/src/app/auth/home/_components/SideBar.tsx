"use client";

import LoanIcon from "./Icons/LoanIcon";
import BookIcon from "./Icons/BookIcon";
import EntranceIcon from "./Icons/EntranceIcon";
import UsersIcon from "./Icons/UsersIcon";
import DatabaseIcon from "./Icons/DatabaseIcon";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Link from "next/link";
import { IconProps } from "@/types/components";

export default function SideBar() {
  const icons = [
    { IconComponent: LoanIcon, route: "/auth/home/loans", name: "Loans" },
    { IconComponent: BookIcon, route: "/auth/home/books/filter/1/0", name: "Books" },
    { IconComponent: EntranceIcon, route: "/auth/home/entrances", name: "Entrances" },
    { IconComponent: UsersIcon, route: "/auth/home/users", name: "Users" },
    { IconComponent: DatabaseIcon, route: "/auth/home/database", name: "Database" },
  ];

  return (
    <aside className="bg-[#0F907C] flex flex-col justify-evenly items-center h-full">
      {icons.map(({ IconComponent, route, name }) => (
        <Icon key={route} IconComponent={IconComponent} route={route} name={name} />
      ))}
    </aside>
  );
}

const Icon: FC<IconProps> = ({ IconComponent, route, name }) => {
  const pathName = usePathname();

  const isActive = pathName.includes(route);

  return (
    <div
      className={`flex items-center justify-center cursor-pointer w-2/3 py-1 rounded-md transition-colors duration-300 ${isActive ? "bg-[#072E33]" : "hover:bg-[#072E33]"
        }`}
    >
      <Link href={route} aria-label={name}>
        <IconComponent isActive={isActive} />
      </Link>
    </div>
  );
};
