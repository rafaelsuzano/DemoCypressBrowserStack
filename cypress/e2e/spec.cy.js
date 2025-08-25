describe('Navegação no Google e Cypress', () => {
  it('Deve pesquisar por Cypress e navegar até o site oficial', () => {
    cy.visit('https://www.google.com');


    cy.get('textarea[name="q"]').type('Cypress{enter}');
  });
});

describe('Teste de Título da Página', () => {
  it('Deve verificar se o título da página do Cypress está correto', () => {
    // 1. Visita o site oficial do Cypress
    cy.visit('https://www.cypress.io');

    // 2. Assere que o título da página é "Cypress Real-Time Front End Testing Framework"
    cy.title().should('eq', 'Cypress Real-Time Front End Testing Framework');
  });
});