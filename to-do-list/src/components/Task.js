import React, { Component } from 'react'




 class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {


        description: this.props.task.description,
        status: this.props.task.status,
        view: this.props.view
      }
    }
  }

  handleTaskDescription = ((e) =>{



    const clonedTask = { ...this.state.task }


    clonedTask.description = e.target.value
    this.setState({
      task: clonedTask,
    })
  })

  handleTaskStatus = ((e) => {
    

    const clonedTask = { ...this.state.task }
    clonedTask.status = e.target.value
    this.setState({
      task: clonedTask,
    })
  })

  handleSubmit = ( (e) => {


    e.preventDefault()
    this.props.modify(this.state.task, this.props.index)

    this.setState({
      view: "task"
    })
  })

  handleChangeViewClick = ( () => {


    this.setState({
      view:  "edit"
    })
  })


  render() {

    return (
      <div className="border rounded-lg  flex items-center px-5  w-[90%] h-[62px]">
      
        
        {(this.state.view === "edit")


          ?  
          
          
          
          <form action="sub"  className="text-black flex justify-between w-full" onSubmit={this.handleSubmit}>
                  <div className='flex items-center w-[70%]'>
                    <input type="text" value={this.state.task.description} onChange={this.handleTaskDescription} className="bg-white border border-slate-300 rounded-lg py-1 pl-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1 sm:text-base text-black w-full flex  focus:border-sky-500"/>
                  </div>               
                  <div className='flex justify-between'>
                    <select  className="text-black border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:ring-1 sm:text-base w-[72px] focus:border-sky-500 
                    " onChange={this.handleTaskStatus}>
                      <option value="To do">To do</option>
                      <option value="Doing">Doing</option>
                      <option value="Done">Done</option>
                    </select>
                    <button className="me-3 btn btn-outline-success" type='submit'>Valider</button>
                  </div>
              </form>


          :  
          
            <div className='flex justify-between w-full'>
              <div className='d-flex col-2 d-flex align-items-center'>
                <span className='font-medium drop-shadow-lg text-lg'>{this.state.task.description}</span>
              </div>
              
              
              <div className='flex items-center'>
            <span className='col-3 d-flex align-items-center'>{this.state.task.status}</span>
                <button className="btn btn-outline-secondary" onClick={this.handleChangeViewClick}>Modifier</button>
                <button className="btn btn-outline-danger" onClick={() =>this.props.delete(this.props.index)}>Supprimer</button>
              </div>
            </div>
        }
        
        
      
      </div>
    )
  }
}

export default Task