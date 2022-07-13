import { useState } from "react";
import { v4 } from 'uuid';

const Edit = ({addData}) =>{
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const titleOnChange = (e) =>{
        setTitle(e.target.value);
    }

    const contentOnChange = (e) =>{
        setContent(e.target.value);
    }

    const handleclick = () =>{
        // addData((prevData)=>{
        //     return [...prevData, { title, content, id: v4() }]
        // }) 
        const data = { title, content, id: v4() }
        fetch('http://localhost:3001/todos',{
            method:'POST',
            headers :{"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => console.log(res))
        .then(addData(true))
        .catch(err => console.log(err))
        }

    return(
        <div className="edit">
        <p>title:</p>
        <input type="text" value={title} onChange={titleOnChange}/>
        <p>content:</p>
        <input type="text" value={content} onChange={contentOnChange}/>
        <button className="add" onClick={handleclick}>add Todo</button>
        </div>
    );
}

export default Edit;