import { useState, useEffect } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'

const QuestionOne = () => {

    const [showAddTask, setShowAddTask] = useState()

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('/tasks')
        const data = await res.json()
        return data
    }

    const addTask = async (task) => {
        const res = await fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()

        setTasks([...tasks, data])
    }


    const deleteTask = async (id) => {
        await fetch(`/tasks/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }



    return (
        <div className="ui container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Task Remaining Please Add '}
        </div>
    )
}



export default QuestionOne;
