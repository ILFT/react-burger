
describe('Создание заказа', () => {
    before(() => {
        cy.startCheck()
    });

    it('Сборка и оформлениезаказа', () => {
        cy.dragDrop('Краторная булка N-200i')
        cy.dragDrop('Биокотлета из марсианской Магнолии')
        cy.dragDrop('Соус традиционный галактический')


        // Переход на страницу авторизации
        cy.buttonClick();
        cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));

        // Заполнение данных на странице авторизации
        cy.get('[data-test="email"]').type('ftmtilkh@gmail.com');
        cy.get('[data-test="password"]').type('12345678');
        cy.buttonClick();
        cy.wait(500);
        cy.location().should((loc) => expect(loc.pathname).to.eq('/'));


        //Оформлени езаказа
        cy.buttonClick();

        cy.wait(20000);
        cy.closeModal()

    });



});