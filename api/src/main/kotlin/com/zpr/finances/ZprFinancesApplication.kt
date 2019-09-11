package com.zpr.finances

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ZprFinancesApplication

fun main(args: Array<String>){
    runApplication<ZprFinancesApplication>(*args)
}