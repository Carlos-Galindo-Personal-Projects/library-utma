import { z } from 'zod';

export const loanSchema = z.object({
    studentId: z
        .string()
        .regex(/^UTM\d{7}$/, { message: 'El ID del estudiante debe tener el formato UTM seguido de 7 dígitos' }),
    bookISBN: z
        .string()
        .length(17, { message: 'El ISBN del libro debe tener 17 caracteres' })
        .regex(/^\d{3}-\d{1,5}-\d{1,7}-\d{1,7}-\d{1}$/, { message: 'El formato del ISBN no es válido' }),
});
