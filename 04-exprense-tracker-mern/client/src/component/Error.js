import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const Error = () => {
    const { errors } = useContext(GlobalContext);
    console.log('errors: ', errors);
    
    if(!errors){
        return('');
    }
    else{
        return (
            errors.map( (error) => (
                 <div className="error"> { error } </div> 
            ))
        )
    }
}

