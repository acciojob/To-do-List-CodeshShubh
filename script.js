//your code here

const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");


addTodoBtn.addEventListener('click',()=>{
	let todoText = newTodoInput.value.trim();
	if(todoText ===""){
		alert('please Enter Valid text First');
		return;
	}

	let todoTag = document.createElement('li')
	     todoTag.textContent = todoText;
	   todoList.appendChild(todoTag)

	newTodoInput.value ='';
})




