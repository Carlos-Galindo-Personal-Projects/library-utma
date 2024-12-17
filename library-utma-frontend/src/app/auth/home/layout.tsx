import Header from './_components/Header';
import SideBar from './_components/SideBar';
import { ChildrenProps } from '@/types/types';

const AuthLayout = ({ children }: Readonly<ChildrenProps>) => {
    return (
        <div className="h-screen flex flex-col">
            <div className='sticky top-0 z-10 h-1/12'>
                <Header />
            </div>

            <div className="flex h-full overflow-y-hidden">
                <div className='w-1/12 h-full fixed top-6'>
                    <SideBar />
                </div>
                <div className='w-11/12 h-full overflow-y-auto ml-auto'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
