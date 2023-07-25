import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Tasklist from './components/Taklist';

function App() {


  const todos = [
    {id: 1, name: "Watch Openheimer"},
    {id: 2, name: "take a shower"},
    {id: 3, name: "read a novel"},
    {id: 4, name: "walk to the park"}
  ];

  return (
    <div>
      <Header />
      <div className='flex flex-row justify-center w-full'>
        <div className="w-9/12 flex flex-col">
          <Form />
          {todos.map(todo => <Tasklist key={todo.id} todo={todo} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
