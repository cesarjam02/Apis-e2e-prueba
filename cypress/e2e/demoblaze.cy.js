
/// <reference types="Cypress" />

import { fakerES as faker } from '@faker-js/faker'


describe('Opcion 1, prueba e2e', () => {
  it('Ingreso a la pagina y agregar 2 productos al carrito', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.wait(2000) 
    //1. Agrega 2 productos al carrito
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.wait(2000) 
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#nava').click()
    cy.wait(2000) 
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(2000)
    //2. visualizamos carrito
    cy.get('#cartur').click()
    cy.wait(2000)

    
    // 3.Completar formulario de compra
    cy.get('.col-lg-1 > .btn').click()
    // Generar datos aleatorios con faker
    const nombre = faker.person.firstName() // Nombre aleatorio
    const pais = faker.location.country()   // País aleatorio
    const ciudad = faker.location.city()    // Ciudad aleatoria
    const tarjeta = faker.finance.creditCardNumber().slice(0, 19) // Número de tarjeta (16 dígitos)
    const mes = faker.date.month()          // Mes aleatorio
    const anio = faker.date.future().getFullYear()  // Año futuro


    cy.get('#name').type(nombre)
    cy.wait(2000)

    cy.get('#country').type(pais)
    cy.wait(2000)

    cy.get('#city').type(ciudad)
    cy.wait(2000)

    cy.get('#card').type(tarjeta)
    cy.wait(2000)

    cy.get('#month').type(mes)
    cy.wait(2000)

    cy.get('#year').type(anio.toString())  
    cy.wait(2000)
    // 5. Finalizar compra
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

  })
})
