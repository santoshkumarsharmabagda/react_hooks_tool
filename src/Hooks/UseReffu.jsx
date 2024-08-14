import React, { useRef, useState } from 'react';

const UseReffu = () => {
    const inputRefs = useRef({
        name: null,
        class: null,
        marks: null,
    });

    const [inputs, setInputs] = useState({
        name: '',
        class: '',
        marks: '',
    });

    const handleClick = () => {
        // Accessing each input field's value through the refs
        const newInputs = {
            name: inputRefs.current.name.value,
            class: inputRefs.current.class.value,
            marks: inputRefs.current.marks.value,
        };

        // Updating state with the current values of input fields
        setInputs(newInputs);

        // Optional: Focus the first input field
        inputRefs.current.marks.focus();

       
        
    };

    return (
        <div>
            <input
                ref={el => (inputRefs.current.name = el)}
                type="text"
                placeholder="Enter name"
            />
            <input
                ref={el => (inputRefs.current.class = el)}
                type="text"
                placeholder="Enter class"
            />
            <input
                ref={el => (inputRefs.current.marks = el)}
                type="text"
                placeholder="Enter marks"
            />
            <button onClick={handleClick}>Show Text</button>
            <p>You typed:</p>
            <p>Name: {inputs.name}</p>
            <p>Class: {inputs.class}</p>
            <p>Marks: {inputs.marks}</p>
        </div>
    );
}

export default UseReffu;
