import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SecondarySidebarLayout from '@/components/layouts/sidebar/SecondarySidebarLayout';
import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout';
import MusicProvider from 'context/MusicContext';
import type { AppProps } from 'next/app';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MusicProvider>
      <PrimaryLayout>
        <SidebarLayout />
        {getLayout(<Component {...pageProps} />)}
        <SecondarySidebarLayout />
      </PrimaryLayout>
    </MusicProvider>
  );
}

export default MyApp;
