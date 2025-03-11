'use client';

import { FC, ReactNode } from 'react';
import { createAppKit } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { arbitrum, mainnet } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { WagmiProvider } from 'wagmi';
import { store } from '@/store';

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const projectId =
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_WALLET_CONNECT_PROJECT_ID';
  const queryClient = new QueryClient();

  const metadata = {
    //optional
    name: 'AppKit',
    description: 'AppKit Example',
    url: 'https://example.com',
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
  };

  /* Create the Wagmi adapter */
  const wagmiAdapter = new WagmiAdapter({
    networks: [mainnet, arbitrum],
    projectId,
  });

  createAppKit({
    adapters: [wagmiAdapter],
    networks: [mainnet, arbitrum],
    metadata,
    projectId,
    features: {
      analytics: true,
    },
  });

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WalletContextProvider;
