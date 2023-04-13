import { useState } from 'react';
import TaskContainer from './TaskContainer';

const TodoPageContent = () => {
  const [taskList, setTaskList] = useState<Array<string>>([]);
  const [task, setTask] = useState('');

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask('');
  };

  const removeTask = (finishedTask: string) => {
    const updatedTaskList = taskList.filter((task) => task !== finishedTask);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <h2>Todo list</h2>

      <form onSubmit={addTask}>
        <input
          value={task}
          type='text'
          placeholder='type a task'
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <input type='submit' />
      </form>

      <h4>List of tasks</h4>
      <p>There are {taskList.length} task(s)</p>
      <TaskContainer taskList={taskList} onFinishTask={removeTask} />
    </>
  );
};

export default TodoPageContent;
