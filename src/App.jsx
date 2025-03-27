import React from 'react';
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import  todoIcon from  './assets/doo.png'
import doingIcon from  './assets/support.png'
import doneIcon from  './assets/coffee-cup.png'

const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <TaskColumn title="To do" icon={todoIcon}/>
        <TaskColumn title="Doing"  icon={doingIcon}/>
        <TaskColumn title="Done"  icon={doneIcon}/>
        {/* <section className='task_column'>section 2</section> */}
      </main>
    </div>
  )
}

export default App