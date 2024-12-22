import { ChildrenProps } from "@/types/components";
import { FC } from "react";

const Layout: FC<ChildrenProps> = ({ children }: Readonly<ChildrenProps>) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {children}
    </div>
  );
}

export default Layout;
