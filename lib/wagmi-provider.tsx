'use client';

import React, { ReactNode } from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, WagmiProvider } from 'wagmi';
import { config, projectId } from './config';

const AVAX = {
  chainId: 43113,
  name: ' Avalanche Fuji C-Chain',
  currency: 'AVAX',
  explorerUrl: 'https://subnets-test.avax.network/c-chain',
  rpcUrl: ' https://api.avax-test.network/ext/bc/C/rpc',
} as any;

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  defaultChain: AVAX,
  enableAnalytics: true,
});

export const WagmiProviderComp = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // configure as per your needs
          },
        },
      }),
  );

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
export default WagmiProviderComp;
