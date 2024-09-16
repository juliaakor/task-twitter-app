import * as yup from 'yup';

export const updateUserSchema = yup.object().shape({
  bio: yup.string().max(160, 'Bio cannot be longer than 160 characters'),
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot be longer than 50 characters'),
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username cannot be longer than 30 characters')
    .matches(/^@\w+$/, 'Username must start with @ and can only contain letters, numbers, and underscores'),
});

export type UpdateUser = yup.InferType<typeof updateUserSchema>;
