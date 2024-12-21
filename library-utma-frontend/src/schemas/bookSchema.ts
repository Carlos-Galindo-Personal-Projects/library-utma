import { z } from 'zod';

export const bookSchema = z.object({
    isbn: z
        .string()
        .length(17, { message: 'El ISBN del libro debe tener 17 caracteres' })
        .regex(/^\d{3}-\d{1,5}-\d{1,7}-\d{1,7}-\d{1}$/, { message: 'El formato del ISBN no es válido' }),
    title: z
        .string()
        .min(1, { message: 'El título del libro es requerido' }),
    author: z
        .string()
        .min(8, { message: 'El autor del libro es requerido' }),
    genreId: z
        .number()
        .int()
        .min(1, { message: 'El género del libro es requerido' }),
    year: z
        .number()
        .int()
        .min(1800, { message: 'El año de publicación debe ser mayor a 1800' }),
    amount: z
        .number()
        .int()
        .min(1, { message: 'La cantidad de libros debe ser mayor a 0' }),
});
