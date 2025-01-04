import { GenreFilterProps } from '@/types/components';
import { useRouter } from 'next/navigation';

export default function SelectorGenreFilter({ currentGenreId, genres, page, setCurrentGenreId }: GenreFilterProps){

    const router = useRouter();

    const handleChange = (value: string) => {
        setCurrentGenreId(parseInt(value));
        router.push(`/auth/home/books/filter/${page}/${value}`);
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
            <select className="text-lg text-black rounded-lg bg-white" value={currentGenreId} onChange={(e) => handleChange(e.target.value)} id='genre'>
                <option value={0}>Todos</option>
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
