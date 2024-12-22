import { GenreSelectorProps } from "@/types/components";
import { FC } from "react";

const GenreSelector: FC<GenreSelectorProps> = ({ register, defaultValue, genres }) => {

  return (
    <div className="mx-4">
      <label htmlFor="genreId" className="text-white text-sm">
        Género
      </label>
      <select
        id="genreId"
        className="w-full rounded-md h-8 px-3 text-black mt-1"
        defaultValue={defaultValue}
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

export default GenreSelector;
