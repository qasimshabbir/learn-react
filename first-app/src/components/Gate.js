import React from 'react';
function Gate(props){
    return (
        <div>
            Gate is <h1>{props.isOpen?'Open':'Closed'}</h1>
        </div>
    );

}

export default Gate;