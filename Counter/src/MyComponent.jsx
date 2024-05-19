import React, {useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("guest");
    const [age, setAge] = useState(25);

    const updateName = () =>{
        setName("Chris")
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick = {updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick = {incrementAge}>Set Age</button>
    </div>);
}
export default MyComponent;