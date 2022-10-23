import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAccount, ConnectButton } from '@web3modal/react'

export default function Home() {
          const {address, isConneted} = useAccount();
          if (!isConneted){
                    return <div className={styles.container}>
                                <Head>
                                  <title>Whos Hodl</title>
                                  <meta name="description" content="Whos-Hodl" />
                                  <link rel="icon" href="/favicon.ico" />
                                </Head>
                          
                                <main className={styles.main}>
                                  <h1 className={styles.title}>
                                    Welcome to Whos-Hodl
                                  </h1>
                          
                                  <p className={styles.description}>
                                    Create By{' '}
                                    <code className={styles.code}>💻 SavePlanet</code>
                                  </p>
                          
                                  <div className={styles.grid}>
                                    <ConnectButton/>
                                  </div>
                                </main>
                          
                                <footer className={styles.footer}>
                                  <a
                                    href=" "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Powered by{' '}
                                    <span className={styles.logo}>
                                              💻 SavePlanet
                                    </span>
                                  </a>
                                </footer>
                              </div>
                    }
                    return <div>Your address is {address}</div>;
        }
        
