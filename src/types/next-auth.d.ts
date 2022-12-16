import 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: { name: string; address: string };
    // user: UserSession;
    // user: {
    //   /** The user's postal address. */
    //    UserSession;
    //   // user: User;
    // };
    // &  DefaultSession['user'];
  }
}
