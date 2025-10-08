function addvalue() {
   let newlist=document.createElement('li');
   let tasklist=document.getElementById('taskList')
   let inputvalue=document.getElementById('task').value
   if (inputvalue =="") {
    alert("input fild not empty")
   }else{
   tasklist.appendChild(newlist)
   newlist.textContent=inputvalue
   document.getElementById('task').value=""
   deleteTask(newlist)
   }
   
}
function deleteTask(newlist) {
    let deleteButton=document.createElement('button')
    deleteButton.textContent="delete"
    newlist.appendChild(deleteButton)
    deleteButton.onclick=function(){
        newlist.remove()
    }
}