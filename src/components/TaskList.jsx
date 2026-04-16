function TaskList(props) {
  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
