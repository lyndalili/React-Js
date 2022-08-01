
import React from 'react'

class Character extends React.Component {
	render() {
		return(
                <div className=' container card mt-2 col-md-4'>
                  <img src={this.props.image} alt={this.props.name}/>
                    <div className=' d-flex card-body flex-column'>
                    <h1 className='card-title'>{this.props.name}</h1>
                    <p className='card-text'>{this.props.title}</p>   
                  </div>
                 <button className="btn btn-outline-primary" onClick={this.props.handleFavoriteClick}>
                 Add Favorites</button>
                </div>
   
   
		)
	}
}
export default Character