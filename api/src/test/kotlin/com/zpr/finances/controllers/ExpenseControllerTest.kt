package com.zpr.finances.controllers

import junit.framework.Assert.assertEquals
import junit.framework.Assert.assertNotNull
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.InjectMocks
import org.mockito.junit.MockitoJUnitRunner
import org.springframework.http.HttpStatus

@RunWith(MockitoJUnitRunner::class)
class ExpenseControllerTest {

    @InjectMocks
    lateinit var expenseController: ExpenseController

    @Test
    fun `Get expense and should return expense details`(){
        val response = expenseController.getExpense()
        assertNotNull(response)
        assertEquals(response.statusCode, HttpStatus.OK)
    }
}