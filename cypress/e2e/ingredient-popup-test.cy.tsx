describe('Открытие модалки с ингредиентом, проверка его содержимого и закрытие', () => {
    before(() => {
        cy.visit('http://localhost:3000');
        cy.contains('Соберите бургер');
    });


    it('Открытие, Проверка содержимого,  Закрытие модального окна', () => {
        cy.get('div').contains('Краторная булка N-200i').click();
        cy.get('div').contains('420')

        cy.get('[data-test="close-icon"]')
            .find('svg')
            .click();


    });



});