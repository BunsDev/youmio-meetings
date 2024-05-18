'use client';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { dark } from '@clerk/themes';
// import { LivepeerConfig } from '@livepeer/react';
import LivepeerClient from '../client';
import { LivepeerConfig } from '@livepeer/react';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import WagmiProviderComp from '../lib/wagmi-provider';
import { config } from '../lib/config';
import { cookieToInitialState } from 'wagmi';
// import { headers } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const initialState = cookieToInitialState(config);

  return (
    <html lang="en">
      <WagmiProviderComp initialState={initialState}>
        <LivepeerConfig client={LivepeerClient}>
          <ClerkProvider
            appearance={{
              layout: {
                socialButtonsVariant: 'iconButton',
              },

              variables: {
                colorText: '#fff',
                colorPrimary: '#0E78F9',
                colorBackground: '#0f0f0f',
                colorInputBackground: '#252A41',
                colorInputText: '#fff',
              },
            }}
          >
            <body className={`${inter.className} bg-dark-2`}>
              <Toaster />
              {children}
            </body>
          </ClerkProvider>
        </LivepeerConfig>
      </WagmiProviderComp>
    </html>
  );
}
