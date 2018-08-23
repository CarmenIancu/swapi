import React from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Urls from '../Components/Urls';
 import Scroll from '../Components/Scroll';
 import './App.css';

class App extends React.Component {

  constructor (){
    super();
    this.state={
        planets:[],
        searchfield:'',
      }
 }

componentDidMount() {
  let planetArray=[];
  Urls.map(url=> {
    return(
      fetch(url)
        .then(response => response.json())
        .then (data => planetArray.push(data))
        .then(users => {this.setState({planets:planetArray})})
    )
})
}


onSearchChange=(event)=> {
  this.setState({searchfield: event.target.value})
}



 render(){
    let filteredPlanets= this.state.planets.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })


    return (
    <div className='tc'>
      <h1 className='f1'>StarWars Planets</h1>
      <p id='title'>Search information about your favorite planets from Star Wars</p>
      <Searchbox searchChange={this.onSearchChange}/>
      <Scroll>
      <CardList planets={filteredPlanets}/>
      </Scroll>
       </div>
    )
  }


}



export default App;
