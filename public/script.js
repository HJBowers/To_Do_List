$(document).ready(function(){

  const jsonHeaders = new Headers({'Content-Type': 'application/json'})
  const taskBtn = $('#addNewTask')
  const listBtn = $('#addNewList')

  // ********************** Create New Task **********************
  function saveNewTask() {
    const funcDesc = 'save new task'
    const newTask = $('#newTask').val()
    const listId = $('#listId').val()

    fetch('/addTask', {
      method: 'POST',
      body: JSON.stringify({newTask, listId}),
      headers: jsonHeaders,
      credentials: 'include'
    })
    .then( res => res.json() )
    .then((response) => {
      if(response.status === 'Success') {
        $('#tasks').append(`<h3>${newTask}</h3>`)
        $('input[name=newTask]').val('')
      } else {
        console.log('Error Hit!', funcDesc);
        $('.container').append(`<div><p>There has been an error, task has not been added.</p></div>`)
      }
    })
    .catch(error => console.error(funcDesc, 'Error: ', error))
  }

  // event handler
  if(taskBtn) {
    taskBtn.onclick = saveNewTask
  }


  // ********************** Create New List **********************
  function saveNewList(event) {
    const funcDesc = 'save new list'
    const title = $('#newListTitle').val()

    fetch('/lists/createList', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: jsonHeaders,
      credentials: 'include'
    })
    .then(res => res.json())
    .then((response) => {
      if(response.status === 'success') {
        $('#lists').append(`<h5><a href="http://localhost:3000/lists/${response.newList.id}" >${title} List</a></h5>`)
        $('input[name=newListTitle]').val('')
      } else {
        console.log('Error Hit!', funcDesc)
        $('#user-list').append(`<div><p>There has been an ${response.status}, list has not been created.</p></div>`)
      }
    })
    .catch(error => console.error(funcDesc, 'Error:', error))
  }

  if(listBtn){
    listBtn.onclick = saveNewList
  }

// ********************** Delete Task **********************
  $(document).on('click', '.deleteTaskBtn', function() {
    var id = $(this).data('id')

    fetch(`/deleteTask/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then( res => res.json() )
    .then( (response) => {
      if(response.status === 'success') {
        const filterString = `[data-id=${id}]`
        $('.task').filter(filterString).remove()
        $('.deleteTaskBtn').filter(filterString).remove()
      } else {
        console.log('Error Hit!')
        $('#user-list').append(`<div><p>There has been an ${response.status}, list has not been created.</p></div>`)
      }
    })
    .catch(error => console.error('Error:', error))
  })
})


// ********************** Delete List **********************


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
