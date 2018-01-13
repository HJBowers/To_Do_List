'use strict';

document.getElementById('addTask');

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


$("button").click(function(){
    $.ajax({url: "http://localhost:3000/lists/:list_id", success: function(result){
        $("#addNewTask").json(result);
    }});
});
