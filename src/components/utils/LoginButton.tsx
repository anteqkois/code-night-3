'use client';

import { Button } from '@/components/utils';
import { getCsrfToken, signIn, signOut, useSession } from 'next-auth/react';
import { SiweMessage } from 'siwe';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
} from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export const LoginButton = function () {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { data: session, status } = useSession();

  const handleLogin = async () => {
    try {
      const callbackUrl = '/protected';
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      });
    } catch (error) {
      window.alert(error);
    }
  };

  const handleLogout = () => {
    disconnect();
    signOut();
  };

  // useEffect(() => {
  //   console.log(isConnected);
  //   if (isConnected && !session) {
  //     handleLogin();
  //   }
  // }, [isConnected]);

  // return isConnected ? (
  //   <Button onClick={() => handleLogout()}>Wyloguj</Button>
  // ) : (
  //   <Button
  //     onClick={(e) => {
  //       e.preventDefault();
  //       if (!isConnected) {
  //         connect();
  //       } else {
  //         handleLogin();
  //       }
  //     }}
  //   >
  //     Zaloguj
  //   </Button>
  // );
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        if (!isConnected) {
          connect();
        } else {
          handleLogin();
        }
      }}
    >
      Zaloguj się
    </Button>
  );
};
