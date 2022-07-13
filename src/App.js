import './index.css';
import Edit from './components/Edit';
import List from './components/List';
import { useState, useEffect } from "react"
import { v4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([
    { title:'學React', content: '學useState', id: v4()},
    { title:'學React', content: '學useEffect', id: v4()},
    { title:'學js', content: '學Fetch', id: v4()}
  ])  

  useEffect(()=>{
    console.log('useEffect 執行');
    console.log(todos);
  },[todos])

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Edit addData = {setTodos} />
      <List data = { todos } deleteData = {setTodos}/>
    </div>
  );
}

export default App;
