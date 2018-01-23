const saveNewTask = function(event) {
  const newTask = document.getElementById('newTask').value
  const listId = document.getElementById('listId').value

  fetch('/addTask', {
    method: 'POST',
    body: JSON.stringify({ newTask, listId }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
  .then( (response) => {
    if(response.status === "Success") {
      $('.tasks').append(`<h3>${newTask}</h3>`)
      $('input[name=newTask]').val('')
    } else {
      console.log("Error Hit!");
      $('.container').append(`<div><p>There has been an ${response.status}, task has not been added.</p></div>`)
    }
  })
  .catch(error => console.error('Error:', error))
}

document.getElementById("addNewTask").addEventListener('click', function(event) {
  saveNewTask(event)
})


/*
Steps to get here:
  - create function for when button is clicked
    - declare input variable(s)
    - write fetch call
      - url
      - method
      - body includes variables inside an object
      - promise turn results into json
      - promise handles json results
        - if successfull writes to database, it appends to list
        - if fails to write to database, it creates a div with an error message
      - .catch to log error in console
  - create event listener that calls function when button is click
*/
