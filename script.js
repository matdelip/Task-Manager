// Function to add a new task
function newElement() {
  const inputValue = document.getElementById("myInput").value.trim();
  if (inputValue !== "") {
    const li = document.createElement("li");
    li.textContent = inputValue;
    document.getElementById("myList").appendChild(li);
    document.getElementById("myInput").value = ""; // Clear the input field

    // Add event listener to new task for adding buttons
    li.addEventListener("click", function() {
      addButtonsToTask(this); // 'this' refers to the clicked task <li>
    });
  }
}

// Function to add buttons (Complete and Remove) to a task item
function addButtonsToTask(task) {
  // Check if buttons already exist
  if (task.querySelector(".actions")) {
    return; // Exit function if buttons already exist
  }

  // Create Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.addEventListener("click", function() {
    task.classList.toggle("checked");
  });

  // Create Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function() {
    task.remove();
  });

  // Create span container for buttons
  const actionsSpan = document.createElement("span");
  actionsSpan.classList.add("actions");
  actionsSpan.appendChild(completeBtn);
  actionsSpan.appendChild(removeBtn);

  // Append the span container to the task item
  task.appendChild(actionsSpan);
}

// Initialize event listener for the "Add Task" button
document.querySelector(".addTaskBtn").addEventListener("click", newElement);

// Initialize event listeners for existing tasks
const tasks = document.querySelectorAll("#myList li");
tasks.forEach(task => {
  task.addEventListener("click", function() {
    addButtonsToTask(this); // 'this' refers to the clicked task <li>
  });
});
