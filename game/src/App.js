import React from 'react';
import Character from './components/Characters';
import Continents from './components/Continents';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      characters: [],
      continents:[],
      favorites :[],
      All:true,
      favorite:false
    }
  }
  async componentDidMount() {
      const response = await fetch("https://thronesapi.com/api/v2/Characters")
      const data = await response.json()
      this.setState({
        characters:data
       
      })
  const response2 = await fetch("https://thronesapi.com/api/v2/Continents")
      const data2 = await response2.json()
      this.setState({
        continents:data2
      })
      console.log(data2)
      console.log(data)

    }
    
   
   AllAffiche =()=>{
      this.setState({
        All:true,
        favorite:false
      })
    }


  favoriteAffiche =()=>{
    this.setState({
      All:false,
      favorite:true
    })
  }


	render() {
		return(


      
    <div className='container'>
      <div>
      <div className='container row justify-content-center' >{this.state.continents.map((continent)=>(
            <Continents 
              key={continent.id} 
              name={continent.name}/> ))}
        
   
            </div> 
      </div>

        <h1>Game of thrones</h1>




         <div className="dropdown">
             <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Tabbed pages
              </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a className="dropdown-item" href="#">Characters</a>
              <a className="dropdown-item" href="#">Continents</a>
            </div>
         </div>


        <div className='m-3'>
            <button className='btn m-3' onClick={this.AllAffiche}>ALL</button>
            <button className='btn m-3' onClick={this.favoriteAffiche}> Favorites</button>
          
        </div>

          {this.state.All===true ? (
       
           <div className='container row justify-content-center' >{this.state.characters.map((character)=>(
            <Character 
            key={character.id} 
            image={character.imageUrl} 
            name={character.fullName} 
            title={character.title} 
           
            handleFavoriteClick={()=>{this.state.favorites.push(character)}} favorites={this.state.favorites}/>
            ))}
      
        </div> 
        
        ) : (
         
          <div className='container row justify-content-center'>{this.state.favorites.map((favoriteCharacter)=>(
            <Character key={favoriteCharacter.id} 
            image={favoriteCharacter.imageUrl}
            name={favoriteCharacter.fullName} 
            title={favoriteCharacter.title} 
             />
            ))}
            </div>
          )
      }



      
   </div>

		)
	}
}
export default App