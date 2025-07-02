let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('profile');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => cy.resetProfile(profileId));
  it('И профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'test');
  });
  it('И редактирует его', () => {
    cy.updateProfile();
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'new');
    cy.getByTestId('ProfileCard.LastName').should('have.value', 'lastname');
  });
});
