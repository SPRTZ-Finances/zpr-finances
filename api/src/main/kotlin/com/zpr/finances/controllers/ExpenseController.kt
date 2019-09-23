package com.zpr.finances.controllers

import com.zpr.finances.models.Expense
import com.zpr.finances.repositories.ExpenseRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import javax.management.loading.ClassLoaderRepository

@RestController
class ExpenseController (private val expenseRepository: ExpenseRepository) {

    @GetMapping("/expenses/{id}")
    fun getExpenseById(@PathVariable(value = "id") expenseId: Long): ResponseEntity<Expense> {

        return expenseRepository.findById(expenseId).map { expense ->
            ResponseEntity.ok(expense)
        }.orElse(ResponseEntity.notFound().build())
    }

}