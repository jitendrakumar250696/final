import Task from './Task'
const Tasks = ({ tasks, onDelete }) => {

    return (
        <div className="ui segment">
            {tasks.map((task, index) => (
                <div className="ui segment">
                    <Task

                        key={index}
                        task={task}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    )
}

export default Tasks;
