import React from 'react';


class Forms extends React.Component{
    render(){
        return(
            
            <form onSubmit={this.props.getWheather}>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="country" placeholder="Country"/>
                <button> Get Wheather </button>
            </form>    
            
        )
    }
}



export default Forms;