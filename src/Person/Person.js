import React from 'react'; 
import './Person.css';


const person = (props) =>{
    return <div className="person">
        <p onClick={props.click}> {props.name}Sweetheart and I am {props.age}   years</p>
        <p>{props.children}</p>
        <input  type="text" onChange={props.changed} />
        </div>
};


export default person;