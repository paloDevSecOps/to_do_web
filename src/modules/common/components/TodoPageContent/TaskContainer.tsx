interface Props {
  taskList: string[];
  onFinishTask: (finishedTask: string) => void;
}

const TaskContainer = ({ taskList, onFinishTask }: Props) => {
  return (
    <>
      {taskList.map((task) => (
        <p key={task} onClick={() => onFinishTask(task)}>{task}</p>
      ))}
    </>
  );
};

export default TaskContainer;