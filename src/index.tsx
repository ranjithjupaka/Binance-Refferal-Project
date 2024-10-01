import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  rabbyWallet,
  frameWallet,
} from '@thirdweb-dev/react'

// fonts
import '@fontsource/plus-jakarta-sans/latin.css'
import '@/lib/styles/globals.css'

import App from './App'
import { Polygon, BinanceTestnet } from '@thirdweb-dev/chains'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        rabbyWallet(),
        frameWallet(),
        coinbaseWallet(),
        walletConnect(),
      ]}
      activeChain={Polygon}
      supportedChains={[Polygon, BinanceTestnet]}
      clientId='314a6830a52191abec2e8fa24dc51180'
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
)
