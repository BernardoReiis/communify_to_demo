import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { Profile } from "./Profile";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: "fPFPXpaz5xgnsLcadXma04nYETn4Fg_i" }),
    publicProvider(),
  ]
);

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

// Pass config to React Context Provider
export default function App() {
  return (
    <div className="flex justify-center items-center">
      <WagmiConfig config={config}>
        <Profile />
      </WagmiConfig>
    </div>
  );
}
