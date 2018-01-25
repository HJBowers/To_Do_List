// ********************** Create New Task **********************
function saveNewTask(event) {
  const newTask = document.getElementById('newTask').value
  const listId = document.getElementById('listId').value

  fetch('/addTask', {
    method: 'POST',
    body: JSON.stringify({newTask, listId}),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    credentials: "include"
  })
  .then( res => {
    return res.json()
  })
  .then( (response) => {
    if(response.status === "Success") {
      $('.tasks').append(`<h3>${newTask}</h3>`)
      $('input[name=newTask]').val('')
    } else {
      console.log("Error Hit!");
      $('.container').append(`<div><p>There has been an error, task has not been added.</p></div>`)
    }
  })
  .catch(error => console.error('Error:', error))
}

const taskBtn = document.getElementById("addNewTask")

if(taskBtn){
	taskBtn.onclick = function(){
		saveNewTask(event)
	}
  taskBtn.addEventListener('click', saveNewTask);
  taskBtn.removeEventListener('click', saveNewTask)
}



// ********************** Create New List **********************
function saveNewList(event) {
  const title = document.getElementById('newListTitle').value

  fetch('/lists/createList', {
    method: 'POST',
    body: JSON.stringify({title}),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    credentials: "include"
  })
  .then( res => {
    return res.json()
  })
  .then( (response) => {
    if(response.status === 'success') {
      $('#lists').append(`<h5><a href="http://localhost:3000/lists/${response.newList.id}" >${title} List</a></h5>`)
      $('input[name=newListTitle]').val('')
    } else {
      console.log("Error Hit!")
      $('#user-list').append(`<div><p>There has been an ${response.statust}, list has not been created.</p></div>`)
    }
  })
  .catch(error => console.error('Error:', error))
}

var listBtn = document.getElementById('addNewList')

if(listBtn){
	listBtn.onclick = function(){
		saveNewList(event)
	}
  listBtn.addEventListener('click', saveNewList);
  listBtn.removeEventListener('click', saveNewList)
}


/*
Steps to get here:
  - create function for when button is clicked
    - declare input variable(s)
    - write fetch call
      - url
      - method
      - body includes variables inside an object
      - promise turns results into json
      - promise handles json results
        - if successfull writes to database, it appends to list
        - if fails to write to database, it creates a div with an error message
      - .catch to log error in console
  - create event listener that calls function when button is click
*/
