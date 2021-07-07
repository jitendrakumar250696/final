import { useState, useEffect } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'


 const setCookie = (cname, cvalue, exdays) => {
    const date = new Date()
    date.setTime(date.getTime() + Number(exdays) * 3600 * 1000)
    document.cookie = `${cname}=${cvalue}; path=/;expires = ${date.toGMTString()}`
  }

  const getCookie = cname => {
    const name = `${cname}=`
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }
 const key = 'userData';
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
         let data =  JSON.parse(getCookie(key));
       // const data = await res.json()
        return data
    }

    const addTask = async (task) => {
       /* const res = await fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        */
        let tasks =  [JSON.parse(getCookie(key))];
        setCookie(key, JSON.stringify(tasks.push(task)), 24)
        let data =  JSON.parse(getCookie(key));
        console.log("data get",data);
        setTasks(data)
    }


    const deleteTask = async (id) => {
        await fetch(`/tasks/${id}`, {
            method: 'DELETE',
        })
     
       let data =  JSON.parse(getCookie(key));
      
                            if (id > -1) {
                              data.splice(id, 1);
                            }
        setCookie(key, JSON.stringify(data), 24)
        let task =  JSON.parse(getCookie(key));
       
        setTasks(task)
     
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
