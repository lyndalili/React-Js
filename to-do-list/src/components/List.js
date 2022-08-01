import React, { Component } from 'react'
import Task from "./Task"

class List extends Component {
    


  render() {
    return (
      <>
        {this.props.tasks.map( (task, index) => {
          return(
          <>
            <Task

                key = {task.description}

                task = {task}

                index = {index}

                modify = {this.props.modify} 

                delete = {this.props.delete} 

                view = "task"
            />
          </>
          )
          
        })}
        
      </>
      
    )
  }
}

export default List