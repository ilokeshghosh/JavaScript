// import logo from './logo.svg';
import './App.css';
import React from 'react';

class FilmItemRow extends React.Component{
  render(){
    return (
      <li>
        <a href={this.props.url}>{this.props.url}</a>
        {/* <a href={this.props.url}>{this.props.title}</a> */}
      </li>
    )
  }
}




class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter:false,
      name: null,
      height: null,
      homworld: null,
      imageUrl: null,
      films: [],

    }
  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 82)
    // console.log("Get new character from a button")
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          imageUrl: data.image,

          
          loadedCharacter:true,
        })
      })

      //Get movie name
    

      

  }

  
  render() {
    const movies= this.state.films.map((url, i)=>{
      return <FilmItemRow key={i} url={url} />
    })

    
  
    return (
      <div>
        {
          this.state.loadedCharacter &&
          <div>

            <h1>{this.state.name}</h1>
            <p><img src={this.state.imageUrl} alt={this.state.name} className="img" /></p>
            <p>{this.state.height}</p>
            <p>  <a href={this.state.homeworld}>HomeWorld</a> </p>
            <p>Movies</p>
            <ul>
             {movies}
            
            </ul>
          </div>

        }

        <button type='button'
          onClick={() => this.getNewCharacter() && this.getMovieName()}
          className="btn">Randomize Character
        </button>

      </div>

    )
  }
}
function App() {
  return (


    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


        <p>
          <StarWars />
        </p>


        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


      </header>
    </div>
  );
}

export default App;

