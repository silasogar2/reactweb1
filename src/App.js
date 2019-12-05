import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then( (guy) => this.setState({monsters:guy}))
  }
  render(){
    return (

      <div className="App">
        <CardList monsters={this.state.monsters}>
          {/* <img src={logo} width="50px" alt="name"/> */}
          
        </CardList>
      
      </div>
    );
  }
}

export default App;
