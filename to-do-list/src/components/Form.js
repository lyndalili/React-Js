import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      task: ""
    }
  }

  handleTaskDescription = ( (e) => {

    this.setState({task: e.target.value})
  })

  handleSubmit = ( (e) => {

    e.preventDefault()

    this.props.addTask(this.state.task)

    this.setState({task: ""}) 
  })

  render() {
    return (
      <>
        <form action="sub" className=" text-center mb-5 w-full " onSubmit={this.handleSubmit} >

            <input type="text" onChange={this.handleTaskDescription} value={this.state.task} placeholder=' Description de ma tache' className=" focus:outline-none min-w-[600px] border border-slate-300 rounded-lg py-2 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-base mr-5 w-2/4 " />

            <button className="btn btn-primary">Submit</button>
        </form>
      
      </>
    )
  }
}

export default Form