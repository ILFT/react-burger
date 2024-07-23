describe('Создание заказа', () => {
    before(() => {
        cy.visit('http://localhost:3000');
        cy.contains('Соберите бургер');
    });

    it('Сборка и оформлениезаказа', () => {
        cy.get('div').contains('Краторная булка N-200i').trigger('dragstart');
        cy.get('[data-test="constructor"]')
            .trigger('drop');
        cy.get('div').contains('Биокотлета из марсианской Магнолии').trigger('dragstart');
        cy.get('[data-test="constructor"]')
            .trigger('drop');
        cy.get('div').contains('Соус традиционный галактический').trigger('dragstart');
        cy.get('[data-test="constructor"]')
            .trigger('drop');

        // Переход на страницу авторизации
        cy.get('Button').click();
        cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));

        // Заполнение данных на странице авторизации
        cy.get('[data-test="email"]').type('ftmtilkh@gmail.com');
        cy.get('[data-test="password"]').type('12345678');
        cy.get('Button').click();
        cy.wait(500);
        cy.location().should((loc) => expect(loc.pathname).to.eq('/'));


        //Оформлени езаказа
        cy.get('Button').click();

        cy.wait(20000);
        cy.get('[data-test="close-icon"]')
            .find('svg')
            .click();

    });



});