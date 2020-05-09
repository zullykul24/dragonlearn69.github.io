describe('Menu Test', () => {
    beforeEach(() => {
        cy.visit('https://zullykul24.github.io/dragonlearn69.github.io/menu.html')
    })
    it('Choose game 1', () => {
        cy.get('#game_1').click()
    })
    it('Choose game 2', () => {
        cy.get('#game_2').click()
    })
    it('Should uses', () => { 
        cy.get('img').should('be.visible')
        cy.get('img').should(($img) => {
            expect($img).to.have.length(2)
        })

        cy.get('a').should('be.visible')
        cy.get('a').should(($a) => {
            expect($a).to.have.length(4)
        })
    })
  })