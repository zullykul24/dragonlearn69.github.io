describe('Game 1 Test', () => {
    
    it('Start button', () => {
        cy.visit('https://zullykul24.github.io/dragonlearn69.github.io/Game1/game1.html');
        cy.get('#startButton').click();
      
    })
    it('Choose game 2', () => {
        //cy.visit('https://zullykul24.github.io/dragonlearn69.github.io/menu.html');
        cy.get('div.back.a').click();
      
    })
  })