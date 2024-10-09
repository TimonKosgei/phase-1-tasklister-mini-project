document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.querySelector('form');
  form.addEventListener('submit',(e) =>{
    const newTask = document.getElementById('new-task-description').value;
    const list  = document.getElementById('tasks')
    const li  = document.createElement('li')
    e.preventDefault();    
    li.textContent = newTask;
    list.append(li);
  })
});
