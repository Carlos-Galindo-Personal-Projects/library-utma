import { z } from 'zod';

export const registerSchema = z
    .object({
    name: z
        .string()
        .min(16, { message: 'El nombre debe tener al menos 16 caracteres' })
        .max(64, { message: 'El nombre debe tener como máximo 64 caracteres' }),
    email: z
        .string()
        .email({ message: 'Correo electrónico inválido' })
        .max(32, { message: 'El correo electrónico debe tener como máximo 32 caracteres' }),
    password: z
        .string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    confirmPassword: z
        .string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    userTypeId: z
        .number()
        .int()
        .min(1, { message: 'Tipo de usuario inválido' }),
    })
    .refine(data => data.password === data.confirmPassword,{
        message: 'Las contraseñas no coinciden',
    });
