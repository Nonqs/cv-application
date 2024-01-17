
export function Div({ info, onDelete }) {


    const handleClick = (index) =>{
        
        onDelete(index)
       
    }

    return (
        <>
            {info.map((display, index) => (
                <div key={index}>
                    <p>{display.name}</p>
                    <button onClick={() => handleClick(index)}>Delete</button>
                </div>
            ))}
        </>
    )
}