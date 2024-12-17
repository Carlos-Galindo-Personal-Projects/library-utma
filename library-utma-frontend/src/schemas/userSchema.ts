import { z } from 'zod';

export const userSchema = z.object({
  email: z
    .string()
    .email({ message: 'Correo electrónico inválido' })
    .max(32, { message: 'El correo electrónico debe tener como máximo 32 caracteres' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});
