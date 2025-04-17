// scripts/storage.js
function saveTodos(todos) {
    localStorage.setItem('dashboard-todos', JSON.stringify(todos));
  }
  
  function loadTodos() {
    return JSON.parse(localStorage.getItem('dashboard-todos')) || [];
  }