package com.zpr.finances.controllers

import com.zpr.finances.models.Expense
import com.zpr.finances.repositories.ExpenseRepository
import org.springframework.web.bind.annotation.*
import java.util.*

@CrossOrigin
@RestController
@RequestMapping("/expenses")
class ExpenseController(val expenseRepository: ExpenseRepository) {

    @GetMapping
    fun getExpenses(): List<Expense> = expenseRepository.findAll()

    @RequestMapping(path =[("/{expenseId}")], method = [(RequestMethod.GET)])
    fun getExpense(@PathVariable("expenseId") expenseId: Long): Optional<Expense>?{
        return expenseRepository.findById(expenseId)
    }

    @PostMapping
    fun newExpense(@RequestBody expense: Expense): Expense {
        expenseRepository.save(expense)
        return expense
    }

    @RequestMapping(path =[("/{expenseId}")], method = [(RequestMethod.PUT)])
    fun updateExpense(@PathVariable("expenseId") expenseId: Long, @RequestBody expense: Expense?): Expense {

        var updatedExpense: Expense = expenseRepository.findById(expenseId).get()

        if (expense != null) {
            updatedExpense.title = expense.title
            updatedExpense.description = expense.description
            updatedExpense.category = expense.category
            updatedExpense.amount = expense.amount
        }

        expenseRepository.save(updatedExpense)
        return updatedExpense
    }

    @RequestMapping(path = [("/{expenseId}")], method = [(RequestMethod.DELETE)])
    fun deleteExpense(@PathVariable("expenseId") expenseId: Long){
        expenseRepository.deleteById(expenseId)
    }
}
