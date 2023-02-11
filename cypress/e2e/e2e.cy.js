describe('Find Aviation cocktail', () => {
  it('successfull e2e test', () => {
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

    cy.get('input').type('   МаРаСкИнО   ');
    cy.get('div ul li.select-none').should('have.length', 1);
    cy.get('div ul li.select-none').should('have.text', 'Мараскино').click();
    cy.get('input').should('have.value', '');
    cy.get('div.flex div.label-box').should('have.text', 'ВодкаДжинМараскино');

    cy.get('div.flex div.label-box:nth-child(3) button').click();
    cy.get('div.flex div.label-box').should('have.length', '2');
    cy.get('div.flex div.label-box').should('have.text', 'ВодкаДжин');

    cy.intercept('GET', 'http://localhost:3000/drinks*').as('getCocktails');
    cy.get('button.btn').should('have.text', 'Поиск').click();
    cy.wait('@getCocktails');
    cy.url().should(
      'equal',
      'http://localhost:8080/cocktails?ingredients=%D0%92%D0%BE%D0%B4%D0%BA%D0%B0,%D0%94%D0%B6%D0%B8%D0%BD',
    );

    cy.get('div.font-medium').should('have.text', 'Найдено 25 коктейлей');
    cy.get('input.checkbox').check('Крепкие');
    cy.get('div.font-medium').should('have.text', 'Найдено 14 коктейлей');
    cy.get('div.result-container div:nth-child(1) div.justify-between').should('have.text', 'Авиация');
    cy.get('div.result-container div:nth-child(1) > a').should('exist').click();
    cy.get('div.justify-between div.font-normal').should('have.text', 'Авиация');
    cy.get('button img').invoke('attr', 'src').should('include', 'favourites');
    cy.get('button img').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favouritesEnabled');

    cy.go('back');
    cy.get('div.font-medium').should('have.text', 'Найдено 14 коктейлей');
    cy.get('input[value="Крепкие"]').should('be.checked');

    cy.get('div.result-container div:nth-child(3) div.justify-between').should('have.text', 'Кловер Клаб');
    cy.get('div.result-container div:nth-child(3) > a').should('exist').click();
    cy.get('div.justify-between div.font-normal').should('have.text', 'Кловер Клаб');
    cy.get('button img').invoke('attr', 'src').should('include', 'favourites');
    cy.get('button img').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favouritesEnabled');
    cy.go('back');
    cy.get('div.result-container div:nth-child(3) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favouritesEnabled');

    cy.get('div.result-container div:nth-child(2) div.justify-between').should('have.text', 'Белая Леди');
    cy.get('div.result-container div:nth-child(2) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favourites');
    cy.get('div.result-container div:nth-child(2) div.justify-between img').click();
    cy.get('div.result-container div:nth-child(2) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favouritesEnabled');

    cy.scrollTo(0, -70);
    cy.get('nav div div.flex div ul li:nth-child(1)').should('have.text', 'Главная').click();
    cy.url().should('equal', 'http://localhost:8080/');
    cy.get('button.btn').should('have.text', 'Поиск').click();
    cy.wait('@getCocktails');

    cy.get('div.font-medium').should('have.text', 'Найдено 52 коктейлей');
    cy.get('div.result-container > div:last-child div.flex div.flex div.page').should('have.length', '6');
    cy.get('div.result-container > div:last-child div.flex div.flex div.current-page').should('have.text', '1');
    cy.get('div.result-container div:nth-child(1) div.justify-between').should('have.text', 'Авиация');
    cy.get('div.result-container div:nth-child(1) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favouritesEnabled');
    cy.get('img.arrow:first-child').click({ force: true });
    cy.get('div.result-container > div:last-child div.flex div.flex div.current-page').should('have.text', '1');
    cy.get('img.right-arrow').click();
    cy.get('div.result-container > div:last-child div.flex div.flex div.current-page').should('have.text', '2');
    cy.get('div.result-container div:nth-child(1) div.justify-between').should('have.text', 'Джон Коллинз');
    cy.get('button.btn').should('have.text', 'Смотреть еще').click();
    cy.get('div.result-container > div').should('have.length', '19');
    cy.get('div.result-container div:nth-child(10) div.justify-between').should('have.text', 'Обезьянья Железа');
    cy.get('div.result-container div:nth-child(10) div.justify-between img').click();
    cy.get('div.result-container div:nth-child(10) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favouritesEnabled');
    cy.get('div.result-container > div:last-child div.flex div.flex div.current-page').should('have.text', '3');
    cy.get('div.result-container > div:last-child div.flex div.flex div.page:last-child')
      .should('have.text', '6')
      .click();
    cy.get('div.result-container > div:last-child div.flex div.flex div.current-page').should('have.text', '6');
    cy.get('img.right-arrow').click({ force: true });
    cy.get('div.result-container > div').should('have.length', '8');
    cy.get('button.btn').should('not.exist');

    cy.scrollTo(0, -70);
    cy.get('nav div div.flex a img').invoke('attr', 'src').should('include', 'favourites');
    cy.get('nav div div.flex a img').click();
    cy.url().should('equal', 'http://localhost:8080/likes');
    cy.get('div.result-container > div').should('have.length', '5');
    cy.get('div.result-container div:nth-child(1) div.justify-between').should('have.text', 'Авиация');
    cy.get('div.result-container div:nth-child(2) div.justify-between').should('have.text', 'Белая Леди');
    cy.get('div.result-container div:nth-child(3) div.justify-between').should('have.text', 'Кловер Клаб');
    cy.get('div.result-container div:nth-child(4) div.justify-between').should('have.text', 'Обезьянья Железа');
    cy.get('div.result-container div:nth-child(1) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favouritesEnabled');
    cy.get('div.result-container div:nth-child(2) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favouritesEnabled');
    cy.get('div.result-container div:nth-child(3) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favouritesEnabled');
    cy.get('div.result-container div:nth-child(4) div.justify-between img')
      .invoke('attr', 'src')
      .should('include', 'favouritesEnabled');
    cy.get('div.result-container div:nth-child(1) > a').should('exist').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favouritesEnabled');
    cy.get('button img').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favourites');
    cy.go('back');
    cy.get('div.result-container > div').should('have.length', '4');

    cy.get('div.result-container div:nth-child(1) > a').should('exist').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favouritesEnabled');
    cy.get('button img').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favourites');
    cy.go('back');
    cy.get('div.result-container > div').should('have.length', '3');

    cy.get('div.result-container div:nth-child(1) > a').should('exist').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favouritesEnabled');
    cy.get('button img').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favourites');
    cy.go('back');
    cy.get('div.result-container > div').should('have.length', '2');

    cy.get('div.result-container div:nth-child(1) > a').should('exist').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favouritesEnabled');
    cy.get('button img').click();
    cy.get('button img').invoke('attr', 'src').should('include', 'favourites');
    cy.go('back');
    cy.get('div.result-container > div').should('have.length', '0');
    cy.get('div.pt-10').should('have.text', 'Вы еще не добавили ни одного коктейля в избранное');
  });
});
