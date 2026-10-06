// the todos array is in the global scope (it's not in any {})
// any JS files included after data.js in index will 
let todos = [];

function addTodo(todos, name, urgency) {
    let newTodo = {
        id: Math.floor(Math.random() * 100 +1),
        name: name,
        urgency: urgency
    }
    todos.push(newTodo);
}

function deleteToDo(todos, idToDelete){
    // let index= null;
    // for (let i=0; i <todos.length; i++){
    //     if(t.id === idToDelete) {
    //         index = i;
    //         break;
    //     }
    // }

    // const index = todos.findIndex(function(t){
    //     t.id === idToDelete;
    // })

    // if the index is not found 
    const index = todos.findIndex(t=> t.id ===idToDelete );
    if (index !== -1){
        todos.splice(index,1);
    }
}

function modifyTodo(todos, idToModify, newTaskName, newUrgency){
     const index = todos.findIndex(t=> t.id ===idToModify );
     if (index !== -1){
        const modifiedTodo = {
            id: idToModify,
            name: newTaskName,
            urgency: newUrgency
        }
        todos[index] = modifiedTodo;
     }
}