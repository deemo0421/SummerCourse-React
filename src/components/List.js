import Item from "./Item"

export default function List({ data, deleteData }) {
  return (
    <div className="list">
        {
            data.map((item) =>{
                const { title, content, id } = item
                return <Item  
                        title={title} 
                        content={content} 
                        key={id} 
                        id={id}
                        deleteData={deleteData}/>
            })
        }
    </div>
  )
}
