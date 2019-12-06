import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:'',
      loading:true
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then( (guy) => this.setState({loading:false,monsters:guy}))
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value}, ()=> console.log(this.state))
  }

  render(){

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));
    if(this.state.loading == false){
      return (
        <div className="App">
        <h1>Monsters App</h1>
          <SearchBox placeholder="Search box" 
              handleChange={this.handleChange}
          />
          {/* <CardList monsters={this.state.monsters} /> */}
          
          <CardList monsters={filteredMonsters} />
        
        </div>
        );

    }else{
      return <div><h1>Loading ....</h1></div>
    }
  }
}

export default App;
