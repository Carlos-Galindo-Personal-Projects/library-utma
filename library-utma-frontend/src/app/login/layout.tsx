import { FC } from "react";
import { ChildrenProps } from "@/types/types";

const Layout: FC<ChildrenProps> = ({ children }: Readonly<ChildrenProps>) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {children}
    </div>
  );
}

export default Layout;
