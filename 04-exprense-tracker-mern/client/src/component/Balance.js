import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    
    let total = 0;
    let income = 0 
    let expense = 0;
    transactions.forEach((transaction)=>{
        total += Number(transaction.amount); 
        income += transaction.amount>0?Number(transaction.amount):0;
        expense += transaction.amount<0?Math.abs(transaction.amount):0;
    })
    

    return (
        <>
        <h4>Your Balance</h4>
        <h1 >${total}</h1>

        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p  className="money plus">+${income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p  className="money minus">-${expense}</p>
            </div>
        </div>
        </>
    )

}
