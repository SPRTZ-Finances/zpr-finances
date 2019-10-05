import React , {Component} from 'react'
import axios from "axios";

class ListExpenses extends  Component {
    constructor(props){
        super(props)
        this.state = {
            expenses: [],
            title: '',
            description: '',
            category: '',
            amount: ''
        }
    }

    componentDidMount() {
        //TODO Pull axios calls out into an APILib
        axios.get('http://localhost:8080/expenses')
            .then(res  => {
                const expenses = res.data;
                this.setState({expenses})
            })
    }

    render() {
        return(
            <>
                <h1>List Expenses</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.expenses.map(
                            expense =>
                                <tr>
                                    <td>{expense.title}</td>
                                    <td>{expense.description}</td>
                                    <td>{expense.category}</td>
                                    <td>{expense.amount}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListExpenses