import { ChildrenProps } from "@/types/components";
import { FC } from "react";

const Layout: FC<ChildrenProps> = ({ children }: Readonly<ChildrenProps>) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {children}
    </div>
  );
}

export default Layout;
