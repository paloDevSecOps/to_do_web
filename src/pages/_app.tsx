import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import TopBar from '../modules/common/components/top-bar/top-bar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authCheck();

    const hideContent = () => setIsLoggedIn(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  function authCheck() {
    const publicPaths = ['/login'];
    const currentLocation = router.pathname;
    if (
      !localStorage.getItem('isUser') &&
      !publicPaths.includes(currentLocation)
    ) {
      setIsLoggedIn(false);
      router.push('/login');
    } else {
      setIsLoggedIn(true);
    }
  }

  return (
    <>
      <TopBar isLoggedIn={isLoggedIn} />
      <Component {...pageProps} />
    </>
  );
}
