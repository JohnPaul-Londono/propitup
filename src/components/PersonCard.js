import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     counter: 
        // }
    }

    render(){
        return(
        <div>
            <h1>{this.props.lastName} {this.props.firstName}</h1>
            <p className="left">{this.props.age}</p>
            <p className="left">{this.props.hairColor}</p>
            <button>Age This Person</button>
        </div>
        )
    }

}


export default PersonCard;