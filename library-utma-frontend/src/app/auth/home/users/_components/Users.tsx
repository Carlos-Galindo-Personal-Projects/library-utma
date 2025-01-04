import { cookies } from "next/headers";
import RegisterForm from "./RegisterForm";
import axiosInstance from "@/axios/axios";
import { UserTypeSelector } from "@/types/responses";

export default async function Users() {

    const storeCookies = await cookies();
    const authToken = storeCookies.get('AuthToken');

    const response = await axiosInstance.get("UserTypes", {
        headers: {
            'Cookie': `AuthToken=${authToken?.value}`
        }
    });

    const userTypes: UserTypeSelector[] = response.data;

    return <RegisterForm userTypes={userTypes} />;
}
