package com.zpr.finances

import junit.framework.Assert.assertEquals
import junit.framework.Assert.assertNotNull
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.http.HttpStatus
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath
import org.springframework.test.web.servlet.MockMvc

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class IntegrationTest {

    lateinit var testRestTemplate: TestRestTemplate

    lateinit var mockMvc: MockMvc;

    @Test
    fun `Get expense and should return expense details`(){

        mockMvc.perform()
        var result = testRestTemplate.getForEntity("/expenses/1", String::class.java)

        assertNotNull(result)
        assertEquals(result.statusCode, HttpStatus.OK)
        assertEquals(jsonPath("title", "Exp"), "Expense 1")
        assertEquals(result.body.getDescription(), "Description goes here!")
        assertEquals(result.body.getCategory(), "Education")
        assertEquals(result.body.getAmount(), "5")
    }
}