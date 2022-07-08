
import './App.css';
import Todos from "../src/components/Todo"
import DisplayTodos from "../src/components/affiche/Affiche"
function App() {
  return (
    <div className="App">
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
