import React, { useState } from "react";

function CreateArea(props){


    let [Note, setNote] = useState({
        title : "",
        content : ""
    })

    function handleSubmit(event){
        props.addNote(Note);
        setNote({
            title : "",
            content : ""
        })

        event.preventDefault();
    }

    function handleChange(event){
        let {name, value} = event.target;
        setNote(prevNote=>{
            
            return {
                ...prevNote,
                [name] : value
            }

        });

    }

    
  return (
    <div>
        <form>
        <input onChange = {handleChange} value = {Note.title}  name="title" placeholder="Title" />
        <textarea onChange = {handleChange} value = {Note.content}  name="content" placeholder="Take a note..." rows="3" />
        <button type = "submit" onClick = {handleSubmit}>Add</button>
        
      </form>
    </div>
  );
}

export default CreateArea;
