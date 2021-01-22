import React, {createContext,useEffect,useReducer}   from 'react';
import AppReducer from './AppReducer.js';
import Web3 from 'web3';
import {EXPENSE_TRACKER_CONTRACT_ABI, EXPENSE_TRACKER_CONTRACT_ADDRESS} from '../contract/ExpenseTrackerContract.js'

//create state
const initialState = {
    transactions: [],
    web3:null,
    contract: null,
    errors: [],
}


//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ( {children} ) => {
    const  [state,dispatch] = useReducer(AppReducer, initialState);

    //loading web3
    useEffect(() => {
        loadBlockchain();
    }, []);

    async function loadBlockchain(){
        try{

            console.log("Web3.givenProvider = ",Web3.givenProvider);
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            setWeb3(web3);
            const contract = new web3.eth.Contract(EXPENSE_TRACKER_CONTRACT_ABI,EXPENSE_TRACKER_CONTRACT_ADDRESS);
            setContract(contract);
            console.log('contract: ', contract);
            console.log('contract methods: ', contract.methods);

            let transactionCount = await contract.methods.getTransactionCount().call();
            console.log('transactionCount: ', transactionCount);

            for(var i =0; i<transactionCount; i++){
                const {owner,description,amount}  = await contract.methods.transactions(i).call();
                console.log('owner,description,amount: ', owner,description,amount);
                
                let transaction = {
                    id: i,
                    owner: owner,
                    text: description,
                    amount: +amount
                }

                addTransaction(transaction);
            }

        }catch(error){
            console.log("Load Blockchain ",error);
            addError(error);
        }

    }

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            value: id,
        });
    }
    
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            value: transaction,
        });
    } 
    async function addTransactionToBlockchain(transaction){
        try{
            console.log('transaction: ', transaction);
            const {web3,contract} = state;
            const account = await web3.eth.getAccounts();
            console.log('account: ', account);

            const receipt = await contract.methods
                                        .addTransaction(
                                            transaction.text,
                                            transaction.amount
                                        )
                                        .send(
                                            {from: account[0]}
                                        );
            
            console.log('receipt: ', receipt);     
            addTransaction(transaction);       
        }catch(error){
            console.log('AddTransactionToBlockchain: ', error);
            addError(error);
        }
    }
    function addError(error){
        dispatch({
            type: 'ADD_ERROR',
            value: error,
        });
    }

    function setWeb3(web3){
        dispatch({
            type: 'SET_WEB3',
            value: web3,
        });
    }
    function setContract(contract){
        dispatch({
            type: 'SET_CONTRACT',
            value: contract,
        });
    }
    return (
        <GlobalContext.Provider value={{
                transactions: state.transactions,
                web3: state.web3,
                contract: state.contract,
                errors: state.errors,
                deleteTransaction,
                addTransaction,
                setWeb3,
                setContract,
                addTransactionToBlockchain,
                addError

        }}>
            {children}
        </GlobalContext.Provider>
    )
}
