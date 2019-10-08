import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from 'axios'
import "./App.css";
import InputMask from 'react-input-mask';
import ListExpenses from "./components/ListExpenses";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            expenses: [],
            title: '',
            description: '',
            category: 'Food',
            amount: '',
            mask: ''
        }
        this.formTitle = React.createRef()
        this.formDescription = React.createRef()
        this.formCategory = React.createRef()
        this.formAmount = React.createRef()
    }

    componentDidMount() {
        axios.get('http://localhost:8080/expenses')
            .then(res  => {
                const expenses = res.data;
                this.setState({expenses})
            })
    }

    onFormSubmit() {
        const { title, description, category, amount } = this.state
        axios.post('http://localhost:8080/expenses', {title, description, category, amount})

            .then(res  => {
                const expenses = res.data;
                this.setState({expenses})
            })
    }

    handleChange = () => {
        this.setState({title: this.formTitle.current.value})
        this.setState({description: this.formDescription.current.value})
        this.setState({category: this.formCategory.current.value})
        this.setState({amount: this.formAmount.current.value})
    }

    render() {
        return (
            <div>
                <input ref={this.formTitle} placeholder='TITLE' type="text" onChange={() => this.handleChange()}/>
                <input ref={this.formDescription} placeholder='DESCRIPTION' type="text" name="description" onChange={() => this.handleChange()}/>
                <select ref={this.formCategory} as="select" placeholder='CATEGORY' onChange={() => this.handleChange()}>
                    <option name="category" value="Food">Food</option>
                    <option name="category" value="Entertainment">Entertainment</option>
                    <option name="category" value="Utilities">Utilities</option>
                </select>
                <InputMask mask="99" ref={this.formAmount} placeholder='AMOUNT' type="number" onChange={() => this.handleChange()}/>
                <button type="submit" color="primary" onClick={() => this.onFormSubmit()}>Submit</button>
                <ListExpenses/>
            </div>
        );
    }
}

export default hot(module)(App);
