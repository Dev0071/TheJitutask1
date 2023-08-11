const form = document.getElementById('form');
const submit = document.getElementById('submit');

submit.addEventListener('click', event => {
	event.preventDefault();
	console.log('Form submitted');
	let isValid = true;
	const fields = form.querySelectorAll('[required]');

	fields.forEach(field => {
		if (field.value.trim() === '') {
			isValid = false;
			field.style.borderColor = '#ff8080';
		}
	});

	// Validate email format
	const emailField = form.querySelector('#email');
	const emailValue = emailField.value.trim();
	if (!isValidEmail(emailValue)) {
		isValid = false;
		emailField.style.borderColor = '#ff8080';
		const emailError = document.createElement('span');
		emailError.classList.add('error');
		emailError.textContent = 'Invalid email format';
		emailField.parentNode.appendChild(emailError);
		return;
	}

	if (!isValid) {
		event.preventDefault();
	}

	try {
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const username = document.getElementById('username').value;
		const cohort = document.getElementById('cohort').value;
		// console.log(email, password, username, cohort);

		const data = { email, password, username, cohort };
		registerUser(data);
	} catch (error) {
		console.error('Error getting form values:', error);
	}
});

form.addEventListener('input', event => {
	if (event.target.required && event.target.value.trim() !== '') {
		event.target.style.borderColor = '#ccc';
		const errorSpan = event.target.parentNode.querySelector('.error');
		if (errorSpan) {
			errorSpan.remove();
		}
	}
});

function isValidEmail(email) {
	const emailRegex = /^[\w-]+(\.[\w-]+)*@thejitu\.com$/;
	return emailRegex.test(email);
}

const registerUser = async data => {
	try {
		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		const result = await response.json();
		const resultContainer = document.getElementById('resultContainer');
		resultContainer.textContent = result.message ?? result.error;
		resultContainer.style.display = 'block';
		resultContainer.style.color = response.ok ? 'green' : 'red';

		setTimeout(() => {
			resultContainer.textContent = '';
			// resultContainer.style.display = 'none';/
		}, 3000);
	} catch (error) {
		console.error('Error registering user:', error);
	}
};

module.exports = { registerUser, isValidEmail };
