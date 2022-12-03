import React from 'react';
class Item extends React.Component{
  clickMe(){
    if(this.props.name==="Gully"){
      console.log("You clicked :",this.props.name , ".", this.props.name, " is ginger cat" )

    }
    else if(this.props.name==="Lokesh"){
      console.log("You clicked :",this.props.name, ".", this.props.name, " is a human with two legs")
    }
    else{

      console.log("You clicked something else")
    }
    
  }
    render(){
      return(
        //React click events
        <h1 onClick={()=> this.clickMe()}>Hello World from {this.props.name}</h1>
      )
    }
  }


export default Item;

 