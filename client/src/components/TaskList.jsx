// TaskList.js


import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './actions';
import './tasklist.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  // Check if there are tasks
  const noTasks = tasks.length === 0;

  return (
    <div>
      {!noTasks && (
        <ul>
          {tasks.map(task => (
            <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
              <button className='comp-btn' onClick={() => dispatch(toggleTask(task.id))}>Complete</button>
              <button className='del-btn' onClick={() => dispatch(deleteTask(task.id))}><img className='del-img' src='del2.png' alt="Delete" /></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
