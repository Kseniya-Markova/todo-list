import {Component} from "react";
import icon from "./shoppingCart.avif";


export class Grocery extends Component {
    constructor () {
        super();
        this.state = {
            userInput: "",
            groceryList: []
        }
    }

    onChangeEvent(e) {
        // console.log(e.target.value)
        this.setState( {userInput: e})
        // you can write event inctead of e.
    }

    addItem(input) {
        if (input === "") {
            alert ( "Add an item!")
        }
        else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState( {groceryList: listArray,  userInput: ""})
        // console.log(listArray)
    }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState( {groceryList: listArray})
    }
    

    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <div>
                <form onSubmit= {this.onFormSubmit}> 
            <div className="container">
                <input  type="text" 
                 placeholder="What do you want to buy?" 
                //  onChange={this.onChangeEvent}
                 onChange={ (e)=> {this.onChangeEvent(e.target.value)}} 
                 value= {this.state.userInput}/>
            </div>
            <div className="container">
                <button  className='btn add'  onClick={ () => {this.addItem(this.state.userInput)}}>Add</button>
            </div>

            <div className="container">
                <button className='btn delete' onClick={ () => {this.deleteItem(this.state.userInput)}}>Delete</button>
            </div>

            <ul >
                {this.state.groceryList.map( (item, index) => (
                    <li onClick={this.crossWord} key={index}>
                    <img  src={icon}  alt="icon" width="40px"/>
                    {item}
                    </li>
                ))}
            </ul>

            </form>
            </div>
        )
    }
}