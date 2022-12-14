import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { mapZodErrorsToFormik } from 'src/helpers';
import { z } from 'zod';

const initialState = {
  nick: '',
  email: '',
  password: '',
};

const signUpValidation = z.object({
  nick: z
    .string()
    .min(2, { message: 'Nick must have 2 or more characters.' })
    .max(20, 'Nick must have less than 20 characters.'),
  email: z.string().email({ message: 'Invalid e-mail.' }),
  password: z
    .string()
    .min(2, { message: 'Password must have 2 or more characters.' }),
});

export const useSignUp = () => {
  const formik = useFormik({
    initialValues: initialState,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        if (!Object.keys(formik.errors).length) {
          try {
            const data = await signUpValidation.parse(values);
            window.history.replaceState(null, '', '/login');
            signIn('credentials', {
              // callbackUrl: '/protected',
              formData: JSON.stringify(data),
            });
          } catch (error) {
            formik.setErrors(mapZodErrorsToFormik(error));
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { formik };
};
