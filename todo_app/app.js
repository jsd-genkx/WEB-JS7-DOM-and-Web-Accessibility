document.addEventListener("DOMContentLoaded", () => {
	const taskInput = document.getElementById("task-input");
	const addTaskBtn = document.getElementById("add-task-btn");
	const searchInput = document.getElementById("search-input");
	const searchBtn = document.getElementById("search-btn");
	const taskList = document.getElementById("task-list");

	let tasks = [];

	addTaskBtn.addEventListener("click", () => {
		const taskText = taskInput.value.trim();
		if (taskText) {
			const task = {
				id: Date.now(),
				text: taskText,
			};
			tasks.push(task);
			renderTasks(tasks);
			taskInput.value = "";
		}
	});

	searchBtn.addEventListener("click", () => {
		const searchText = searchInput.value.trim().toLowerCase();
		const filteredTasks = tasks.filter((task) =>
			task.text.toLowerCase().includes(searchText)
		);
		renderTasks(filteredTasks);
	});

	// searchInput.addEventListener("input", () => {
	// 	const searchText = searchInput.value.trim().toLowerCase();
	// 	const filteredTasks = tasks.filter((task) =>
	// 		task.text.toLowerCase().includes(searchText)
	// 	);
	// 	renderTasks(filteredTasks);
	// });

	function renderTasks(tasksToRender) {
		taskList.innerHTML = "";
		tasksToRender.forEach((task) => {
			const taskItem = document.createElement("li");
			taskItem.className =
				"flex justify-between items-center bg-gray-200 px-4 py-2 mb-2 rounded text-pretty hover:ring-1 hover:ring-violet-700 hover:ring-offset-2";

			const taskText = document.createElement("span");
			taskText.textContent = task.text;
			taskItem.appendChild(taskText);

			const buttonContainer = document.createElement("div");
			buttonContainer.className = "flex space-x-2";

			const editBtn = document.createElement("button");
			editBtn.textContent = "Edit";
			editBtn.className =
				"bg-purple-600 text-white py-1 px-4 rounded font-sans font-semibold";
			editBtn.addEventListener("click", () => editTask(task.id));
			buttonContainer.appendChild(editBtn);

			const deleteBtn = document.createElement("button");
			deleteBtn.textContent = "Delete";
			deleteBtn.className =
				"bg-red-600 text-white py-1 px-4 rounded font-sans font-semibold";
			deleteBtn.addEventListener("click", () => deleteTask(task.id));
			buttonContainer.appendChild(deleteBtn);

			taskItem.appendChild(buttonContainer);
			taskList.appendChild(taskItem);
		});
	}

	function editTask(id) {
		const task = tasks.find((t) => t.id === id);
		if (task) {
			const newTaskText = prompt("Edit task", task.text);
			if (newTaskText !== null) {
				task.text = newTaskText.trim();
				renderTasks(tasks);
			}
		}
	}

	function deleteTask(id) {
		tasks = tasks.filter((t) => t.id !== id);
		renderTasks(tasks);
	}
});
