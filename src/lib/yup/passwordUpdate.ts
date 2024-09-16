import * as yup from 'yup';

export const passwordUpdateSchema = yup.object().shape({
  confirmCurrentPassword: yup
    .string()
    .oneOf([yup.ref('currentPassword')], 'Current passwords must match')
    .required('Please confirm your current password'),
  currentPassword: yup
    .string()
    .required('Current password is required')
    .min(6, 'Password must be at least 8 characters long'),
  newPassword: yup.string().required('New password is required').min(6, 'Password must be at least 8 characters long'),
});

export type UpdatePassword = yup.InferType<typeof passwordUpdateSchema>;
