import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./actions";
import "./taskinput.css";
import TaskList from "./TaskList";

const TaskInput = () => {
  const [text, setText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [tasks, setTasks] = useState([]); // State to store tasks
  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
      setShowInput(false); // Hide the input field after adding task
      setTasks([...tasks, { text: text, id: Math.random() }]);
    }
  };

 

  return (
    <>
   
    <div className="container">
      <h1>To-Do List</h1>

      {/* Conditional rendering based on showInput state */}
      {!showInput && (
        <button id="hid-btn" onClick={() => setShowInput(true)}><span className="plus">+</span><span className="btn-txt">Add Task</span></button>
      )}

      {showInput && (
        <form onSubmit={handleSubmit} className="inputabc">
          <input
            id="input-el"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="🟢🔴🟡"
          />
          <button id="btn" type="submit">Add</button>
        </form>
     
        
      )}
    </div>

    {tasks.length>0 && (<div className="task">
    <li className=""><TaskList tasks={tasks}  /></li>
    </div>)}

    </>
  );
};

export default TaskInput;