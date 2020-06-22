import React from "react";
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No expenses found</p>
        ) : (
            props.expenses.map((expense) => {
                return  <ExpenseListItem key={expense.id} expense = {expense} />
            })
        )
    }
    <h1>expense list</h1> 
    {}
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters)
    };
}
export default connect(mapStateToProps)(ExpenseList)
