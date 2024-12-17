"use client";

import LoanIcon from "./LoanIcon";
import BookIcon from "./BookIcon";
import EntranceIcon from "./EntranceIcon";
import UsersIcon from "./UsersIcon";
import DatabaseIcon from "./DatabaseIcon";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { IconProps } from "@/types/types";

export default function SideBar() {
  const icons = [
    { IconComponent: LoanIcon, route: "/auth/home/loans" },
    { IconComponent: BookIcon, route: "/auth/home/books" },
    { IconComponent: EntranceIcon, route: "/auth/home/entrance" },
    { IconComponent: UsersIcon, route: "/auth/home/users" },
    { IconComponent: DatabaseIcon, route: "/auth/home/database" },
  ];

  return (
    <aside className="bg-[#0F907C] flex flex-col justify-evenly items-center h-full">
      {icons.map(({ IconComponent, route }) => (
        <Icon key={route} IconComponent={IconComponent} route={route} />
      ))}
    </aside>
  );
}

const Icon: FC<IconProps> = ({ IconComponent, route }) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive = pathName === route;

  return (
    <div
      onClick={() => router.push(route)}
      className={`flex items-center justify-center cursor-pointer w-2/3 py-1 rounded-md transition-colors duration-300 ${
        isActive ? "bg-[#072E33]" : "hover:bg-[#072E33]"
      }`}
    >
      <IconComponent isActive={isActive} />
    </div>
  );
};
