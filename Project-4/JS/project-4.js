//  Variables

const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

// Event Listener for Add Button

addTask.addEventListener('click',function(){
    // Created div element where each task will reside and later will be added to task-container
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)
  
    // Added check button to strike thorugh list-item later if done
    let checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class = "fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    // Added delete button to delete list-item later if done
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class = "fa-solid fa-trash-can"></i>'
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)

    // Input validation if input is entered then only add list item
    if(inputTask.value === ""){
        alert("Please Enter a Task!")
    }
    else{
        taskContainer.appendChild(task)
    }

    inputTask.value = ""

    // Event listener to strike through list-item
    checkButton.addEventListener('click',function(e){
        let target = e.target
        checkButton.parentElement.style.textDecoration = "line-through"
    });

    // Event listener to delete list-item
    // when you click the trash can icon within the button, it will fail by deleting everything including the parent. The icon is its own DOM element and is NOT the button element.
    deleteButton.addEventListener('click', function (e) {
		let target = e.target;
		if (target.matches('button')) {
			target.parentElement.remove();
		}
		if (target.matches('i')) {
			target.parentElement.parentElement.remove();
		}
	});
});
