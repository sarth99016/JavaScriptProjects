//  Variables

const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

// Event Listener for Add Button

addTask.addEventListener('click',function(){
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    let checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class = "fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class = "fa-solid fa-trash-can"></i>'
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)

    if(inputTask.value === ""){
        alert("Please Enter a Task!")
    }
    else{
        taskContainer.appendChild(task)
    }

    inputTask.value = ""

    checkButton.addEventListener('click',function(e){
        let target = e.target
        checkButton.parentElement.style.textDecoration = "line-through"
        console.log(e)
        console.log(e.target)
        console.log(target.parentElement)
        console.log(target.parentElement.parentElement)
    });

    // when you click the trash can icon within the button, it will fail by deleting everything including the parent. The icon is its own DOM element and is NOT the button element.
    deleteButton.addEventListener('click', function (e) {
		let target = e.target;
		if (target.matches('button')) {
			target.parentElement.remove();
            alert('button')
		}
		if (target.matches('i')) {
			target.parentElement.parentElement.remove();
		}
        alert('i')
	});
});
