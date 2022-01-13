import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    increaseAge =()=>{
        this.setState({age: this.state.age + 1})
    }

    render(){
        return(
        <div>
            <h1>{this.props.lastName} {this.props.firstName}</h1>
            <p className="left">Age: {this.state.age}</p>
            <p className="left">{this.props.hairColor}</p>
            <button onClick={this.increaseAge}>Age This Person</button>
        </div>
        )
    }

}


export default PersonCard;