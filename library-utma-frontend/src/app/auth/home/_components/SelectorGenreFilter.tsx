import React, { FC, useEffect, useState } from 'react'
import axiosInstance from '@/axios/axios';
import { AxiosError } from 'axios';
import { Genre } from '@/types/responses';
import { GenreFilterProps } from '@/types/components';

const SelectorGenreFilter: FC<GenreFilterProps> = ({genreId, setGenreId}) => {

    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        async function fetchGenres() {
            try {
                const response = await axiosInstance.get("/Genres");
                setGenres(response.data);
            } catch (error) {
                if (error instanceof AxiosError) {
                    alert(error.response?.data)
                    return
                }
                alert("Ha ocurrido un error");
            }
        }

        fetchGenres();
    }, []);

    return (
        <select className="text-2xl text-black rounded-lg px-4 font-semibold mb-6" value={genreId} onChange={(e) => setGenreId(Number(e.target.value))}>
            <option value=""> Selecciona un género </option>
            {genres.length > 0 ? (
                genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))
            ) : (
                <option value="">Cargando...</option>
            )}
        </select>
    )
}

export default SelectorGenreFilter
