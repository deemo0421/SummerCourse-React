
export default function Item({ title, content, id, deleteData}) {
    const handleDelete = () =>{
        // deleteData((prevData)=>{
        //     return prevData.filter( item => item.id !== id)
        // })
        fetch(`http://localhost:3001/todos/${id}`,{
            method:'DELETE',
        })
        .then(res => console.log(res))
        .then(deleteData(true))
        .catch(err => console.log(err))
    }
    return (
        <div className="item">
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}
