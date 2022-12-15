import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { z } from 'zod';

const initialState = {
  nick: '',
  password: '',
};

const signUpValidation = z.object({
  nick: z
    .string()
    .min(2, { message: 'Nick must have 2 or more characters.' })
    .max(20, 'Nick must have less than 20 characters.'),
  password: z
    .string()
    .min(2, { message: 'Password must have 2 or more characters.' }),
});

export const useLogin = () => {
  const formik = useFormik({
    initialValues: initialState,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        if (!Object.keys(formik.errors).length) {
          try {
            const result = signUpValidation.safeParse(values);

            if (result.success) {
              window.history.replaceState(null, '', '/login');
              signIn('credentials', {
                // callbackUrl: '/protected',
                nick: result.data.nick,
                password: result.data.password,
              });
            } else {
              formik.setErrors(
                result.error.formErrors.fieldErrors as Record<string, string>
              );
            }
          } catch (error) {
            console.log(error);
            toast.error('Something went wrong !');
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { formik };
};
