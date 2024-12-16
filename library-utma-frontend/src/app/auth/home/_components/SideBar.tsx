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
    <aside className="w-24 bg-[#0F907C] h-full flex flex-col justify-evenly items-center">
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
      className={`cursor-pointer ${isActive ? "text-white" : "text-gray-400"}`}
    >
      <IconComponent isActive={isActive} />
    </div>
  );
};
