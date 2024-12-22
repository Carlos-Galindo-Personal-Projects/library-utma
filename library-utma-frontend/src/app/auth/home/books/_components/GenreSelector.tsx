"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/axios/axios";
import { AxiosError } from "axios";
import { GenreSelectorProps } from "@/types/components";

export default function GenreSelector({ register }: GenreSelectorProps) {
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axiosInstance.get("/Genres");
        setGenres(response.data);
      } catch (error) {
        if(error instanceof AxiosError) {
          alert(error.response?.data);
        }
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="mx-4">
      <label htmlFor="genreId" className="text-white text-sm">
        Género
      </label>
      <select
        id="genreId"
        className="w-full rounded-md h-8 px-3 text-black mt-1"
        {...register("genreId", {
          setValueAs: (value) => Number(value),
        })}
      >
        <option value="">Selecciona un género</option>
        {genres.length ? (
          genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))
        ) : (
          <option value="">No hay géneros disponibles</option>
        )}
      </select>
    </div>
  );
}
