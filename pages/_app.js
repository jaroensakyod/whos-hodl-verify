import '../styles/globals.css'
import { Web3Modal } from '@web3modal/react'
import {chains, providers} from "@web3modal/ethereum"



const modalConfig = {
          theme: "dark",
          accentColor:"default",
          ethereum:{
                    appName: "Web3Modal",
                    chains: [chains.polygonMumbai],
                    providers: [
                              providers.walletConnectProvider({
                                        projectId: "b81bdb9ce7441f4bfdd041942a612a40"
                              }),
                    ],
                    autoConnect:true,
          },
          projectId: "b81bdb9ce7441f4bfdd041942a612a40",
};

function MyApp({ Component, pageProps }) {
  return (
          <>
                    <Component {...pageProps} />
                    <Web3Modal config={modalConfig}/>
          </>
  );
}

export default MyApp
