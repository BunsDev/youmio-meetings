// lib/config.ts

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

export const projectId = '6a1ea1cb75d52415bb4110fa68566498';

if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'Web3Modal Example',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const AVAX = {
  id: 43113,
  name: 'Avalanche Fuji C-Chain',
  network: 'Avalanche Fuji C-Chain',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche Fuji C-Chain',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: {
      http: ['https://api.avax-test.network/ext/bc/C/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'AVAX',
      url: 'https://subnets-test.avax.network/c-chain',
    },
  },
  testnet: true,
} as any;

export const config = defaultWagmiConfig({
  chains: [AVAX],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableEmail: true,
});
