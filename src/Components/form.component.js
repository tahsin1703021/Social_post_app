import React, { useState } from 'react'

const Form = (props) => {
    const [inputs, setInputs] = useState({});
    const {handleNewPost} = props
    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputs(values => ({... values, [fieldName]: fieldValue, }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputs(values => ({... values,isLiked: 0, isDisliked: 0}))
        handleNewPost(inputs);
    }
    
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label> ID
                <input 
                    type="text" 
                    name='id' 
                    value={inputs.id || ""}
                    onChange={handleChange}
                />
                </label>
                <br/>
                <label> Title
                <input 
                    type="text" 
                    name='title' 
                    value={inputs.title || ""}
                    onChange={handleChange}
                />
                <br/>
                </label>
                <label> Date
                <input 
                    type="text" 
                    name='date' 
                    value={inputs.date || ""}
                    onChange={handleChange}
                />
                </label>
                <input type="submit"/>
            </form>
        </>
     );
}
 
export default Form;