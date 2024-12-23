import { z } from 'zod';

const entranceSchema = z.object({
    studentId: z
        .string()
        .regex(/^UTM\d{8}$/, { message: 'El ID del estudiante debe tener el formato UTM seguido de 8 dígitos' }),
    description: z
        .string()
        .min(10, { message: 'La descripción debe tener al menos 10 caracteres' }),
});

export default entranceSchema;
