import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext.js'

export const History = () => {

    const { transactions,deleteTransaction } = useContext(GlobalContext);
    
    return (
        <>
        <h3>History</h3>
        <ul  className="list">
            {transactions.map( ({id,text,amount}) => (
                <li  key={id} className={` money ${(amount < 0)? 'minus':'plus'} `}>
                    {text}
                    <span>$ {amount} </span>
                    <button onClick={()=>deleteTransaction(id)} className="delete-btn">x</button>
                </li>
            ))}
        </ul>
        </>
    )
}
