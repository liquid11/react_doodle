import React from 'react';
import './Person.css';
//simple es6 function in which the state cannot be used
const person = (props) => {

    return (
        <div className="Person">
            <p>I am a person and i am {props.name}
                and my age is {props.age}</p>
            <p>{props.children}</p>
            <button  onClick={props.click}>child button</button>
            <input type="text" onChange={props.changed}/>

        </div>
    )
};

export default person;