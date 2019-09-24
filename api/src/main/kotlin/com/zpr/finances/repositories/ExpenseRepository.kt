package com.zpr.finances.repositories

import com.zpr.finances.models.Expense
import org.springframework.data.jpa.repository.JpaRepository

interface ExpenseRepository : JpaRepository<Expense, Long> {
}