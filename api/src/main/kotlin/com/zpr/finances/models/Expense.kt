package com.zpr.finances.models

import javax.persistence.*

@Entity
@Table(name= "expenses")
class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(columnDefinition = "serial")
    var id: Long? = null

    var title: String? = null
    var description: String? = null
    var amount: Double? = null
    var category: String? = null
}