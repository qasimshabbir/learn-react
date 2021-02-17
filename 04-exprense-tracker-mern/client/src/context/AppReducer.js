
const AppReducer = (state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            console.log("Delete called");
            return{
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.value)
            }
        case 'ADD_TRANSACTION':
            console.log(action.value);
            return{
                ...state, 
                transactions: [action.value,...state.transactions]
            }
        case 'SET_WEB3':
            return {...state, web3:action.value}
        case 'SET_CONTRACT':
            return {...state, contract:action.value}
        case 'ADD_ERROR':
            return {...state, errors: [action.value,...state.errors]};
        default:
            return state;
    }
}

export default AppReducer;