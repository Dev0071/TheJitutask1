describe('Registration Form', () => {
	it('successfully registers a user', () => {
		cy.visit('http://127.0.0.1:5500/client/index.html');

		cy.get('#email').type('test10@thejitu.com');
		cy.get('#cohort').type('Cohort123');
		cy.get('#username').type('testuser');
		cy.get('#password').type('test123');

		cy.get('#submit').click();

		cy.get('#resultContainer').should('be.visible').and('contain', 'User registered successfully');

		cy.wait(3000);

		cy.get('#resultContainer').should('not.be.visible');
	});

	it('user registration failed', () => {
		cy.visit('http://127.0.0.1:5500/client/index.html');

		cy.get('#email').type('test10@thejitu.com');
		cy.get('#cohort').type('Cohort123');
		cy.get('#username').type('testuser');
		cy.get('#password').type('test123');

		cy.get('#submit').click();

		cy.get('#resultContainer')
			.should('be.visible')
			.and('contain', 'User with this email already exists');

		cy.wait(3000);

		cy.get('#resultContainer').should('not.be.visible');
	});
});
