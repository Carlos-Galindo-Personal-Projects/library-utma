import { z } from 'zod';

export const userSchema = z.object({
  email: z
    .string()
    .email({ message: 'Correo electrónico inválido' })
    .max(32),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});
