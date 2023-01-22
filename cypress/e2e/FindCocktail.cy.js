describe('Find Aviation cocktail', () => {
  it('successfully find Aviation cocktail', () => {
    cy.visit('/');
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Поиск');

    cy.get('input').type('ВОДКА');
    cy.get('div ul li.select-none').should('have.length', 3);
    cy.get('div ul li.select-none:nth-child(2)').should('have.text', 'Водка').click();
    cy.get('input').should('have.value', '');
    cy.get('div.flex div.label-box').should('have.text', 'Водка');

    cy.get('input').type('джин');
    cy.get('div ul li.select-none').should('have.length', 2);
    cy.get('div ul li.select-none:nth-child(1)').should('have.text', 'Джин').click();
    cy.get('input').should('have.value', '');
    cy.get('div.flex div.label-box').should('have.text', 'ВодкаДжин');

    cy.get('input').type('МаРаСкИнО');
    cy.get('div ul li.select-none').should('have.length', 1);
    cy.get('div ul li.select-none').should('have.text', 'Мараскино').click();
    cy.get('input').should('have.value', '');
    cy.get('div.flex div.label-box').should('have.text', 'ВодкаДжинМараскино');

    cy.get('div.flex div.label-box:nth-child(3) button').click();

    cy.intercept('GET', 'http://localhost:3000/drinks*').as('getCocktails');
    cy.get('button.btn').should('have.text', 'Поиск').click();
    cy.wait('@getCocktails');

    cy.get('div.font-medium').should('have.text', 'Найдено 25 коктейлей');
    cy.get('input.checkbox').check('Крепкие');
    cy.get('div.font-medium').should('have.text', 'Найдено 14 коктейлей');
    cy.get('div.result-container div:nth-child(1) div.justify-between').should('have.text', 'Авиация');
    cy.get('div.result-container div:nth-child(1) > a').should('exist').click();
    cy.get('div.justify-between div.font-normal').should('have.text', 'Авиация');

    cy.go('back');
    cy.get('div.font-medium').should('have.text', 'Найдено 14 коктейлей');
    cy.get('input[value="Крепкие"]').should('be.checked');
  });
});
