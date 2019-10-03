import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from 'axios'
import "./App.css";
import InputMask from 'react-input-mask';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expenses: [],
            title: '',
            description: '',
            category: ["Food", "Entertainment", "Utilities"],
            amount: '',
            mask: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/expenses')
            .then(res  => {
                const expenses = res.data;
                this.setState({expenses})
            })
    }


    PostExpense = (e) => {
        const { title, description, category, amount } = this.state
        axios.post('http://localhost:8080/expenses', {title, description, category, amount})

            .then(res  => {
                const expenses = res.data;
                this.setState({expenses})
            })
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        const { title, description, category, amount } = this.state

        return (
            <form>
                <input placeholder='TITLE' type="text" name="title" value={title} onChange={this.onChange}/>
                <input placeholder='DESCRIPTION' type="text" name="description" value={description} onChange={this.onChange}/>
                    <select placeholder='CATEGORY'>
                        <option name="Food" value={category[0]}>Food</option>
                        <option name="Entertainment" value={category[1]}>Entertainment</option>
                        <option name="Utilities" value={category[2]}>Utilities</option>
                    </select>
                <InputMask mask='99.99' placeholder='AMOUNT' type="text" name="amount" value={amount} onChange={this.onChange}/>
                <button type="submit" onClick={this.PostExpense}>Submit</button>
                <div>Current Expenses</div>
                <div>
                    {this.items = this.state.expenses.map((item, key) =>
                        <li key={item.id}>
                            <span className="title">Title: </span>{item.title}
                            <span className="title">  Description: </span>{item.description}
                            <span className="title">  Category: </span>{item.category}
                            <span className="title">  Amount: </span>{item.amount}
                        </li>
                    )}
                </div>
            </form>
        );
    }
}

export default hot(module)(App);
