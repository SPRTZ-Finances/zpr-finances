import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from 'axios'
import './bootstrap.css'
import "./App.css";
import InputMask from 'react-input-mask';
import ListExpenses from "./components/ListExpenses";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            expenses: [],
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
        let title = this.formTitle.current.value
        let category = this.formCategory.current.value
        let description = this.formDescription.current.value
        let amount = this.formAmount.current.value

        axios.post('http://localhost:8080/expenses', {title, description, category, amount})

            .then(res  => {
                const expenses = res.data;
                this.setState({expenses})
            })
    }

    render() {
        return (
            <div>
                <input ref={this.formTitle} placeholder='TITLE' type="text"/>
                <input ref={this.formDescription} placeholder='DESCRIPTION' type="text" name="description" />
                <select ref={this.formCategory} placeholder='CATEGORY'>
                    <option name="category" value="Food">Food</option>
                    <option name="category" value="Entertainment">Entertainment</option>
                    <option name="category" value="Utilities">Utilities</option>
                </select>
                <InputMask mask="99.99" ref={this.formAmount} placeholder='AMOUNT' />
                <button type="submit" color="primary" onClick={() => this.onFormSubmit()}>Submit</button>
                <ListExpenses/>
            </div>
        );
    }
}

export default hot(module)(App);
