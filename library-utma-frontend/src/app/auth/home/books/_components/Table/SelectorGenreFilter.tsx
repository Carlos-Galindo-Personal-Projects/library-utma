import React, { FC, useEffect, useState } from 'react'
import axiosInstance from '@/axios/axios';
import { AxiosError } from 'axios';
import { Genre } from '@/types/responses';
import { GenreFilterProps } from '@/types/components';

const SelectorGenreFilter: FC<GenreFilterProps> = ({genreId, setGenreId, setPage}) => {

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

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenreId(Number(e.target.value))
        localStorage.setItem("genreId", e.target.value);
        setPage(1);
    }

    return (
        <div
            className='flex items-center justify-center px-4 space-x-4 mb-6'
        >
            <label
                className='text-lg text-white'
                htmlFor="genre"
            >
                Filtrar por género:

            </label>
            <select className="text-lg text-black rounded-lg bg-white" value={genreId} onChange={handleChange}>
                {genres.length > 0 ? (
                    genres.map(genre => (
                        <option key={genre.id} value={genre.id} className='bg-white text-black'>{genre.name}</option>
                    ))
                ) : (
                    <option value="">Cargando...</option>
                )}
            </select>
        </div>
    )
}

export default SelectorGenreFilter
