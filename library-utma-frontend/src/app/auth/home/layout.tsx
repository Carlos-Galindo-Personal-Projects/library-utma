import Header from './_components/Header';
import SideBar from './_components/SideBar';
import { ChildrenProps } from '@/types/types';

const AuthLayout = ({ children }: Readonly<ChildrenProps>) => {
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

export default AuthLayout;
