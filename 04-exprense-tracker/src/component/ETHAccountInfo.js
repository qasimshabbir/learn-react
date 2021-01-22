import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const ETHAccountInfo = () => {
    const { web3 } = useContext(GlobalContext);
    const [ethAccount, setEthAccount] = useState("");
    const [accountBalance, setAccountBalance] = useState(0);
       
    
    useEffect(()=>{
        console.log("in usEffect = ",web3);
        (async ()=>{
            if(web3){
                const account = await web3.eth.getAccounts();
                setEthAccount(account[0]);
                const balance = await web3.eth.getBalance(account[0]);
                setAccountBalance(web3.utils.fromWei(balance,"ether"));
            }
        })();
    },[web3])
    function accountDisplay(){
        if(ethAccount){
            return (
                <div>
                    <h4>Address: </h4>
                    <div>{ethAccount}</div>
                    <h4>Balance: </h4>
                    <span className="money plus">{accountBalance} Ether</span>
                </div>);
        }
        else {
            return <div>Loading Web3 and Account Details</div>
        }
    }
    return (
        <>
        <h3>Ethereum Account Details</h3>
       <div className="eth-account-info-container">
            {
                accountDisplay()
            }
            
        </div>
        </>
    )
}
