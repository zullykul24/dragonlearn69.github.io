//vist, get, should, type;
describe('Game 1 Test', () => {
    
    it('Start button', () => {
        cy.visit('https://zullykul24.github.io/dragonlearn69.github.io/Game1/game1.html');
        cy.wait(500)
        cy.get('#startButton').click();
      
    })
    it('Should uses', () => {
        cy.get('#next_link').should('be.hidden')
        cy.get('#input_1').should('have.focus')
    })
    it('Check the results', () => {
        cy.get('#input_1').type('359');// if true
        cy.get('#submit_1').click();
        cy.get('#message_1').should('contain', 'Excellent!')
        cy.wait(1000)

        cy.get('#input_2').type('0'); // if false
        cy.get('#submit_2').click();
        cy.get('#message_2').should('contain', 'Wrong answer')
        cy.wait(1000)

       
        cy.get('#submit_3').click(); // if not answer
        cy.get('#message_3').should('contain', 'Write your answer')
        cy.wait(1000)


    })


    it('Back to menu', () => {
        cy.get('#backButton').click();
      
    })
  })