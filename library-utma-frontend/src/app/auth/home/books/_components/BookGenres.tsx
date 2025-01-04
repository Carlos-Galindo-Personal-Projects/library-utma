import { cookies } from "next/headers";
import Books from "./Books";
import axiosInstance from "@/axios/axios";
import { Genre } from "@/types/responses";

export default async function BookGenres({ page, genreId }: { page: number, genreId: number }) {

    const storeCookies = await cookies();
    const AuthToken = storeCookies.get('AuthToken');

    const response = await axiosInstance.get("/Genres", {
        headers: {
            'Cookie': `AuthToken=${AuthToken?.value}`
        }
    })

    const genres: Genre[] = response.data;

    return (
        <Books genres={genres} page={page} genreId={genreId} />
    )
}
