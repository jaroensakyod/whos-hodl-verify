import { useAccount } from '@web3modal/react'


export default function Connected() {
          const {address} = useAccount();
          return(   <>
                    Your address is {address}
                    </>
          );
        }