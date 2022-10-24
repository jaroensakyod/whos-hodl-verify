
import styles from '../../styles/Home.module.css'
import { useAccount, ConnectButton } from '@web3modal/react'
import Header from './components/header'
import Body from './components/body';
import Footer from './components/footer';
import Connected from './Connected';


export default function Homepage() {
          const {address, isConnected} = useAccount();
          if (!isConnected){
                    return <div className={styles.container}>
                                <Header/>
                          
                                <main className={styles.main}>
                                  <Body/>
                          
                                  <div>
                                    <ConnectButton/>
                                  </div>
                                </main>
                          
                                <Footer/>
                              </div>
          }
          return <Connected/> ;
          
        }