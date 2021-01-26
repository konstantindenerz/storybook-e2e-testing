let ids: string[] = [];
beforeEach(() => {
  cy.visit('/');
  cy.window().should('have.property', 'stories').then((stories) => {
    ids = stories as unknown as any[];
  });
});

it('loads examples', () => {
  ids.forEach(id => {
    cy.visit(`iframe.html?id=${id}`);
    (cy as any).matchImageSnapshot(id);
  });
});
