import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext.js'

export const AddTransaction = () => {
    const { addTransactionToBlockchain,addError } = useContext(GlobalContext);
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    function getRandomId(){
        return Math.round((Math.random()*100000)+1);
    }

    function onSubmit(e){
        e.preventDefault();
        
        if(text === '' || amount === '0'){
            addError('Nothing added');
            return false;
        }

        const newTransaction = {
            id: getRandomId(),
            text: text,
            amount: +amount
        }
        addTransactionToBlockchain(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit = {onSubmit}>
            <div className="form-control">
                <label >Text</label>
                <input type="text" onChange={(e)=>setText(e.target.value)} value={text}  />
            </div>
            <div className="form-control">
                <label 
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" onChange={(e)=>setAmount(e.target.value)}  value={amount} />
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}
