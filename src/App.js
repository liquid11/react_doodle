import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
class App extends Component {

    state = {
        persons: [
            {
                name: 'MAX',
                age: 12
            }, {
                name: 'arsaln',
                age: 2
            }, {
                name: 'josh',
                age: 11
            }
        ]
    }

    switchNameHandler = (newName) => {

        // console.log('it is clicked'); wil no revognize //this.state.persons[0].name =
        // 'ajax';
        this.setState({
            persons: [
                {
                    name: newName,
                    age: 6
                }, {
                    name: 'john',
                    age: 7
                }, {
                    name: 'bandit',
                    age: 17
                }
            ],
            otherState: 'the other state',
            showPersons: false
        });

    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: 'Malvin',
                    age: 6
                }, {
                    name: event.target.value,
                    age: 7
                }, {
                    name: 'bandit',
                    age: 17
                }
            ],
            otherState: 'the other state'
        });

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
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    {/* <h1 className="App-title">Welcome to React</h1> */}
                </header>

                {/* <p className="App-intro">
          bismillah1
          <code>src/App.js</code>
          and save to reload.
        </p> */}

                {/* //click with bind it is recommended*/}
                {/* <button style={style}
          onClick={this
          .switchNameHandler
          .bind(this, 'Ragnarok with bind!!')}>switch with bind
        </button>
        <button onClick={() => this.switchNameHandler('Ragnarok with function!')}>switch with function</button> */}

                <button style ={style} onClick={this.togglePersonHandler}>Switch Name</button>

                {this.state.showPersons
                    ? <div>
                        {this.state.persons.map((person)=>{

                            return <Person name={person.name} age={person.age}/>

                        })
                        }
                        {/*<Person
                            click={this
                                .switchNameHandler
                                .bind(this, 'Lepo')}
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}></Person>

                        <Person
                            changed={this.nameChangeHandler}
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}>
                            My Hobbies:racing
                        </Person>
                        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>*/}
                    </div>
                    : null
                }

            </div>

            // return
            // React.createElement('div',{className:'App'},React.createElement('h1',null,'ah
            // a haha'));
        );
    }
}

export default App;
