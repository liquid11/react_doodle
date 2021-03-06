import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

    state = {
        persons: [
            {
                id:1,
                name: 'MAX',
                age: 12
            }, {
                id:2,
                name: 'arsaln',
                age: 2
            }, {
                id:3,
                name: 'josh',
                age: 11
            }
        ]
    }

    nameChangeHandler = (event,id) => {

        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;

        });
        //moderen approach of the spread operstor
        const person = {
            ...this.state.persons[personIndex]
        };

        //alternative approach
        //const person = Object.assign({},this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons]

        persons[personIndex] = person;


        this.setState({
            persons: persons
        });

    }

    deletePersonHandler = (personIndex) => {

        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons})

    }

    togglePersonHandler = () => {


        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {

        const style = {

            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <header className="App-header">
                </header>

                <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>

                {this.state.showPersons
                    ? <div>
                        {this.state.persons.map((person,index) => {

                            return <Person
                                click={()=> this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event)=>this.nameChangeHandler(event,person.id)}
                            />
                        })
                        }

                    </div>
                    : null
                }

            </div>

        );
    }
}

export default App;
