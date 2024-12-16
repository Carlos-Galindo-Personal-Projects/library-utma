import { ReactNode } from 'react';
import Header from './_components/Header';
import SideBar from './_components/SideBar';

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="h-screen flex flex-col">
            <Header />

            <div className="flex flex-1">
                <SideBar/>

                <div className="flex-1 p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

