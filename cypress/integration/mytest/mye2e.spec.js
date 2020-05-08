describe('Menu Test', () => {
    
    it('Choose game 1', () => {
        cy.visit('https://zullykul24.github.io/dragonlearn69.github.io/menu.html');
        cy.get('#game_1').click();
      
    })
    it('Choose game 2', () => {
        //cy.visit('https://zullykul24.github.io/dragonlearn69.github.io/menu.html');
        cy.get('#game_2').click();
      
    })
  })