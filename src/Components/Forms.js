import React from 'react';

const Forms = (props) =>{
    return(
            
        <form onSubmit={props.getWheather}>
            <input type="text" name="city" placeholder="City"/>
            <input type="text" name="country" placeholder="Country"/>
            <button> Get Wheather </button>
        </form>    
        
    )
}



export default Forms;