const form = document.getElementById('form');
const userName = document.getElementById('name');
const img = document.getElementById('image');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const userDiv = document.querySelector('.user');
const users = [];

class User {
	constructor(name, img, email, phone) {
		this.name = name;
		this.img = img;
		this.email = email;
		this.phone = phone;
	}
}

class UserList {
	constructor(users = []) {
		this.users = users;
	}

	addUser(user) {
		this.users.push(user);
	}

	deleteUser(user) {
		const index = this.users.indexOf(user);
		if (index !== -1) {
			this.users.splice(index, 1);
		}
	}

	updateUser(user) {}
}

form.addEventListener('submit', e => {
	e.preventDefault();
	const newUser = new User(userName.value, img.value, email.value, phone.value);
	console.log(newUser);

	const userList = new UserList(users);
	userList.addUser(newUser);
	console.log(users);

	displayUsers();
});

const displayUsers = () => {
	users.forEach(user => {
		const userTemplate = `<div class="user">
            <img src="${user.img}" alt="${user.name}">
            <div class="content">
                <div class="contact">
                    <p>${user.name}</p>
                    <p>${user.email}</p>
                    <p>${user.phone}</p>
                </div>
                <button onclick="deleteUser('${user.name}')">Delete</button>
            </div>
        </div>`;
		userDiv.innerHTML += userTemplate;
	});
};

const deleteUser = userName => {
	// const userList = new UserList(users);
	// console.log(userList);
	console.log(users);

	const userToDelete = users.find(user => user.name === userName);
	if (userToDelete) {
		UserList.deleteUser(userToDelete);
		displayUsers();
	}
};
