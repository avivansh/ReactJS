import React,{useState} from 'react';

const FCSM = () => {

    const [name, changeName]=useState("vansh mittal")
    const [count,changeCount]=useState(0)
    const [details,updateDetails]=useState({name:"vansh mittal",age:21})
    return ( <>
    <h1> Functional component state management</h1>
    <hr/>
    <h3>{name}</h3>
    <button onClick={()=>changeName("Tushar Singhal")}> change the name</button>
    <hr/>
    <h3>{count}</h3>
    <button onClick={()=>changeCount(count-1)}>decrement</button>    
    <button onClick={()=>changeCount(count+1)}>increment</button> 

    <hr/>
    <h3>{details.name}-{details.age}</h3> 
    <button onClick={()=>updateDetails({...details,age:25})}>change the details</button>
    <Child name={name}/>
    </> );
}
 
const Child = (props) => {
    return ( <>
    <hr/>
    <h3>{props.name}</h3>

    </> );
}

export default FCSM;