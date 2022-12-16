'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

import { Button, Card, ErrorMessage, Input } from '@/components/utils';
import { useLogin, useSignUp } from '@/hooks/index';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const session = useSession();
  const error = useSearchParams().get('error');

  const { formik: formikSignUp } = useSignUp();
  const { formik: formikLogin } = useLogin();

  return (
    <main className="flex flex-col gap-7">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            window.history.replaceState(null, '', '/login');
            signIn('credentials', {
              // callbackUrl: '/protected',
              nick: 'anteqkois',
              password: 'haslo123',
            });
          }}
        >
          Login
        </Button>
        <Button onClick={() => signOut()}>Logout</Button>
      </div>
      <Card>
        <h4>Session data:</h4>
        {JSON.stringify(session)}
      </Card>
      {error === 'CredentialsSignin' && (
        <ErrorMessage>Wrong nick or password</ErrorMessage>
      )}
      <Card>
        <h3>Register</h3>
        <form onSubmit={formikSignUp.handleSubmit}>
          <Input
            id="nick"
            name="nick"
            label="Nick"
            type="text"
            placeholder="anteqkois"
            onChange={formikSignUp.handleChange}
            value={formikSignUp.values.nick}
            error={formikSignUp.errors.nick}
            className="max-w-md"
          />
          <Input
            id="email"
            name="email"
            label="E-mail"
            type="email"
            placeholder="anteqkois@gmail.com"
            onChange={formikSignUp.handleChange}
            value={formikSignUp.values.email}
            error={formikSignUp.errors.email}
            className="max-w-md"
          />
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="anteqkois"
            onChange={formikSignUp.handleChange}
            value={formikSignUp.values.password}
            error={formikSignUp.errors.password}
            className="max-w-md"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
      <Card>
        <p>Default credentials: nick: anteqkois, password: haslo123</p>
        <h3>Login</h3>
        <form onSubmit={formikLogin.handleSubmit}>
          <Input
            id="nick"
            name="nick"
            label="Nick"
            type="text"
            placeholder="anteqkois"
            onChange={formikLogin.handleChange}
            value={formikLogin.values.nick}
            error={formikLogin.errors.nick}
            className="max-w-md"
          />
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="anteqkois"
            onChange={formikLogin.handleChange}
            value={formikLogin.values.password}
            error={formikLogin.errors.password}
            className="max-w-md"
          />
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </main>
  );
}
