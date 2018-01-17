'use strict';
console.log("Script works!");
// document.getElementById('addTask');

// fetch('/lists/:list_id', {
//   method: 'POST',
//   body: JSON.stringify('form data?'),
//   headers: new Headers({
//     'Content-Type': 'application/json'
//   })
// })
// .then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));


// Get element from page
// Make appendTaskToList function
//  - takes value of input and forms h3 element with it
//  - appends new h3 element to the list
//  - clears the value of the input (makes new one and removes old?)
// Make saveNewTask function
//  - sends data to database via fetch AJAX call

// const addNewTaskButton = document.getElementById("addNewTask")


const appendTaskToList = (event) => {
  const newTask = document.getElementById('newTask').value
    $('.tasks').append(`<h3>${newTask}</h3>`)
}

const saveNewTask = function(event) {
  const newTask = document.getElementById('newTask').value
  const listId = document.getElementById('listId').value
  console.log({ newTask, listId })
  $('input[name=newTask]').val('')

  fetch('http://localhost:3000/lists/addTask', {
    method: 'POST',
    body: JSON.stringify({ newTask, listId }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then((results) => {
    console.log("results ===>", results);
    results.json()
  })
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

document.getElementById("addNewTask").addEventListener('click', function(event) {
  appendTaskToList(event)
  saveNewTask(event)
})

// $('button').click(function(){
//     $.ajax({url: 'http://localhost:3000/lists/:list_id', {
//       method: 'post',
//       headers: 'application/json',
//       body: JSON.stringify(document.getElementById('newTask'))
//     }
//     }});
