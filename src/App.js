import React, {useState} from "react";
import './App.css'


function InputContainer({tasks, setTasks}){

  const [inputValue, setInputValue] = useState('');

  function handleKeyEnter(evnt){
    if(evnt.key === 'Enter')
      sendInput();
  }

  const sendInput = () => {
    if(inputValue.length > 0){
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }

  function handleInputChange(event){
    setInputValue(event.target.value);
  }

  return (
    <div className="input-container">
        <div className="input-group mb-3 mx-auto" style={{width: "400px"}}>
          <input className="form-control" 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyEnter}
            placeholder="Add a task"
          />

          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={sendInput}>Add</button>
          </div>
        </div>
      </div>
  );
}

function TaskList({tasks, setTasks}){

  function deleteTask(index){
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
      <div className="tasks">

        <h2>Tasks</h2>

        <ul className="list-group">
          {tasks.map((task, index) => (
            <li id="task" className="list-group-item" key={index}>
              <p id="task-text" className="text-left p-2 m-0">{task}</p>
              <button className="btn btn-danger"
                onClick={() => deleteTask(index)}
              > X </button>
            </li>
          ))}
        </ul>


      </div>
  );
}


function App(){

  const [tasks, setTasks] = useState([]);

  return(
    <div className="container text-center">
      <h1> To-do List </h1>

      <InputContainer tasks={tasks} setTasks={setTasks}/>
      
      <TaskList tasks={tasks} setTasks={setTasks}/>

    </div>
  );

}

export default App;