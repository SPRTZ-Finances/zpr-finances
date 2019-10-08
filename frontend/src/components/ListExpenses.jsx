import React , {Component} from 'react'
import axios from "axios";
import ApiLib from "../ApiLib";


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
       ApiLib.getExpenses().then(value => {
           const expenses = value.data
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
                                <tr key={expense.id}>
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
