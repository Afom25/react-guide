import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';
class App extends Component {
  state = {
    persons: [
      { name:'Afom', age:23},
      { name:'Arsema',age:24}
    ]
  }


  nameChangeHandler = (event)=>{
    this.setState({persons:
      [
        { name:'Afom Abraham ', age:23},
        { name: event.target.value,age:24}
      
      ],
      showPersons: false
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow })
  }
  render ( ){
    const style = {
      font:'inherit',
      border:'1px solid red',
    }
    let persons = null ;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={() =>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}/>


          })}
        {/* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'HIdri') }
        changed={this.nameChangeHandler}>My hobbies:racing</Person> */}
     
          </div> 

      );
    }
  return (
    <div className="App">
     <h2>HELLO REACT</h2>
     <p>Hidri Abraham</p>
     <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons </button>
     {persons}

    </div>
  );
}

}
export default App;
