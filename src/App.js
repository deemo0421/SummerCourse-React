import './index.css';
import Edit from './components/Edit';
import List from './components/List';
import { useState, useEffect } from "react"
import { v4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([])
  const [reload, setReload] = useState(false)  

  const getData = async() =>{
    const res = await fetch('http://localhost:3001/todos');
    const data = await res.json();
    setTodos(data);
    setReload(false)
  } 

  useEffect(()=>{
      getData()
    // fetch('http://localhost:3001/todos')
    // .then( res => res.json())
    // .then( data => {
    //   console.log(data);
    //   setTodos(data)
    // })
    // .catch( err => console.log(err))
  },[reload])

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Edit addData = {setReload} />
      <List data = { todos } deleteData = {setReload}/>
    </div>
  );
}

export default App;
