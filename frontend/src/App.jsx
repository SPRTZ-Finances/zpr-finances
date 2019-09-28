import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from 'axios'
import "./App.css";

class App extends Component {

    state = {
        expenses: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/expenses')
            .then(res  => {
                const expenses = res.data;
                this.setState({expenses})
            })
    }

    render() {
        return (
            <div>
                <span>Title<input type="text"/></span>
                <span>Description<input type="text"/></span>
                <span>Category
                    <select>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Utilities">Utilities</option>
                    </select>
                </span>
                <span>Amount $<input type="text"/></span>
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
            </div>
        );
    }
}

export default hot(module)(App);
