const tasks = [];

module.exports = {
  getAllTasks: () => tasks,
  addTask: (task) => tasks.push(task),
  markAsCompleted: (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      console.log(`Tarefa ${id} marcada como concluída`);
    }
  }
};

