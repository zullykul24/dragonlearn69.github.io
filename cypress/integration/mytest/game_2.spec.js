//vist, get, should, type;
describe('Game 2 Test', () => {
    
    it('Start button', () => {
        cy.visit('https://zullykul24.github.io/dragonlearn69.github.io/Game2/game2.html');
        cy.wait(500)
        cy.get('#start').click();
    })
    it('Should uses', () => {
        cy.get('#next_link').should('contain', '')
        cy.get('img').should('be.visible')
        cy.get('#input1').should('be.focus')
        cy.get('input').should(($input) => {
            expect($input).to.have.length(4)
        })
    })
    it('Check the results', () => {
        cy.get('#input1').type('5')// if true
        cy.get('#input2').should('be.focus')
        cy.wait(1000)
        cy.get('#input2').type('40')//if false
        cy.get('#suggest1units').should(($suggest1units) => {
            expect($suggest1units).to.have.css('display','block')
        })
        cy.wait(1000)
        cy.get('#input2').type('{Backspace}{Backspace}50')
        cy.get('#input1').should('be.focus')
        cy.get('#input1').should('contain','')
        cy.get('#input2').should('contain','')
        cy.get('#suggest1units').should(($suggest1units) => {
            expect($suggest1units).to.have.css('display','none')
        })
       
    })
    it('Back to menu', () => {
        cy.get('a').contains('Back').click();
      
    })
  })