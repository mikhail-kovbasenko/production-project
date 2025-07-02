export const updateProfile = () => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.FirstName').clear().type('new');
  cy.getByTestId('ProfileCard.LastName').clear().type('lastname');
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: 'fas',
    },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 31,
      currency: 'EUR',
      country: 'Russia',
      city: 'Moscow',
      username: 'test',
      // eslint-disable-next-line max-len
      avatar: 'https://sun9-56.userapi.com/s/v1/if2/g2Vp1KS5ElTWNARB7V58ZeIjgv5HxH_utCMgdGeTSkQopXlEOXoQPXSUR8Mid3l7VPYk4tahhOe8bI8niK1whB3L.jpg?quality=96&as=32x18,48x27,72x40,108x60,160x89,240x133,360x200,480x267,540x300,604x336&from=bu&u=otIwtHv8rc10DNAoH3hvD2YwSOejJ7BcwT4Klyr2cQQ&cs=320x213',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
