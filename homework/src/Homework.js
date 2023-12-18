import {Component} from "react";
import heart1 from "./heart1.jpg"
import heart2 from "./heart2.jpg"

export class Homework extends Component {
    constructor() {
        super();

        this.state = {
            text: "LIKE US",
            image: heart1
        }
    }

    newImage() {
        this.setState( {
             text: "Thank you! We love you,too!",
             image: heart2
            })
    }

    textChange(event) {
        console.log(event.target.value);
    }

        render() {
            return (
                <div>
                <div className="container">
                    <h2>{this.state.text}</h2>
                </div>
                <div className="container">
            
                    <img onClick={ ()=> this.newImage()} src={this.state.image} alt="heart" width="100px"/>
                    
                </div>

                <div className="container">
                    <input 
                    type="text"
                    onChange={this.textChange}  />
                </div>
                
                
                </div>
            )
        }

    }
