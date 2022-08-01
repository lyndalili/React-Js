import React, { Component } from 'react'

import Form from './components/Form'

import List from './components/List'
import "./App.css"

class App extends Component {
  constructor() {
    super()


    this.state = {
      tasks: [],
      filter: ""
    }
  }



  addTask = ( (string) => {
    const taskss = [{ 
      description: string, 
      status: "To do"
      },...this.state.tasks]
    
    this.setState({tasks: taskss})
  })


  deleteTask = ( (index) => {
    const taskss = [...this.state.tasks]
    taskss.splice(index, 1)
    this.setState({
      tasks: taskss
    })
  })

  modifyTask = ( (task, index) => {
    const taskss = [...this.state.tasks]
    taskss[index] = task
    this.setState({
      tasks: taskss
    })
  })

  handleFilterClick = ( (string) => {
    this.setState({
      filter : string
    })
    
  })

  render() {
    const filteredTasks = this.state.tasks.filter ( (task) => {
      return task.status === this.state.filter || this.state.filter === ""

    })
    return (
      
      
      
      <div className='flex flex-col items-center h-screen'>


       <h1 className='text-2xl font-bold mt-10 mb-10 text-center"'> To-do List React </h1>


        <div className='w-full'>
         
         
          <Form 
            addTask={this.addTask}
          />
        </div>


        <div className=" flex-wrap justify-center overflow-x-auto w-full flex  ">
          <List 
            tasks = {filteredTasks}
            delete = {this.deleteTask}
            modify = {this.modifyTask}
          />
        </div>
       

        <div className=' gap-4 w-full flex justify-center '>
      
          <button onClick={() => this.handleFilterClick("")} className="me-3 btn btn-outline-secondary">All</button>
          <button onClick={() => this.handleFilterClick("Doing")} className="me-3 btn btn-outline-warning">Doing</button>
          <button onClick={() => this.handleFilterClick('To do')} className="me-3 btn btn-outline-danger">Todo</button>
          <button onClick={() => this.handleFilterClick("Done")} className="me-3 btn btn-outline-success">Done</button>
        </div>
        
      </div>
      
    
    )
  }
}

export default App
