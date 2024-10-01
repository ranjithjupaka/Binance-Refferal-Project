import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <Meta />
      <div className='flex min-h-screen flex-col bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] min-w-screen'>
        <Header />
        <main className='wrapper '>{children}</main>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  )
};

export default Layout;
