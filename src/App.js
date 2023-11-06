import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {

  // const numberComplete = todos.filter(t => t.done).length;
  // const numberTotal = todos.length;
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
