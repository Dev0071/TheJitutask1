class Task {
	constructor(description, completed = false) {
		this.description = description;
		this.completed = completed;
	}

	toggleCompleted() {
		this.completed = !this.completed;
	}
}

class TodoList {
	constructor() {
		this.tasks = this.loadTasksFromLocalStorage() || [];
	}

	addTask(description) {
		const newTask = new Task(description);
		this.tasks.push(newTask);
		this.saveTasksToLocalStorage();
	}

	removeTask(index) {
		if (index >= 0 && index < this.tasks.length) {
			this.tasks.splice(index, 1);
			this.saveTasksToLocalStorage();
		}
	}

	removeAllTasks() {
		this.tasks = [];
		this.saveTasksToLocalStorage();
	}

	filterTasks(filter) {
		switch (filter) {
			case 'all':
				return this.tasks;
			case 'active':
				return this.tasks.filter((task) => !task.completed);
			case 'completed':
				return this.tasks.filter((task) => task.completed);
			default:
				return [];
		}
	}

	saveTasksToLocalStorage() {
		localStorage.setItem(
			'tasks',
			JSON.stringify(this.tasks)
		);
	}

	loadTasksFromLocalStorage() {
		const tasksJSON = localStorage.getItem('tasks');
		if (tasksJSON) {
			const tasksData = JSON.parse(tasksJSON);
			return tasksData.map(
				(data) => new Task(data.description, data.completed)
			);
		}
		return null;
	}
}

const todoList = new TodoList();
const todosContainer = document.querySelector('.todos');
const itemsLeftButton =
	document.getElementById('itemsLeft');
const removeAllButton =
	document.getElementById('removeAll');

// Function to render tasks in the DOM
function renderTasks() {
	todosContainer.innerHTML = '';

	todoList
		.filterTasks(currentFilter)
		.forEach((task, index) => {
			const article = document.createElement('article');
			const div = document.createElement('div');
			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.checked = task.completed;
			checkbox.addEventListener('change', () => {
				task.toggleCompleted();
				renderTasks();
				updateItemsLeft();
			});

			const span = document.createElement('span');
			span.innerText = task.description;

			const removeButton = document.createElement('button');
			removeButton.innerHTML =
				'<img src="./images/icon-cross.svg" alt="">';
			removeButton.addEventListener('click', () => {
				todoList.removeTask(index);
				renderTasks();
				updateItemsLeft();
			});

			div.appendChild(checkbox);
			div.appendChild(span);
			article.appendChild(div);
			article.appendChild(removeButton);
			todosContainer.appendChild(article);
		});

	updateItemsLeft();
}

// Function to update the "items left" counter
function updateItemsLeft() {
	const activeTasksCount =
		todoList.filterTasks('active').length;
	itemsLeftButton.textContent = `${activeTasksCount} ${
		activeTasksCount === 1 ? 'todo' : 'todos'
	} left`;
}

// Event listener for form submission
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const textInput = document.getElementById('text');
	const taskDescription = textInput.value.trim();
	if (taskDescription !== '') {
		todoList.addTask(taskDescription);
		textInput.value = '';
		renderTasks();
	}
});

// Event listener for "remove all" button
removeAllButton.addEventListener('click', () => {
	todoList.removeAllTasks();
	renderTasks();
});

// Event listeners for filter buttons
const filters = document.querySelectorAll('.filter');
let currentFilter = 'all';
filters.forEach((filter) => {
	filter.addEventListener('click', () => {
		currentFilter = filter.dataset.filter;
		filters.forEach((f) => f.classList.remove('active'));
		filter.classList.add('active');
		renderTasks();
	});
});

// Initial rendering of tasks
renderTasks();
