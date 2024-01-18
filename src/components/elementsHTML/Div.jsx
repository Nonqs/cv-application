import "../../styles/Div.css"

export function Div({ info, onDelete }) {


    const handleClick = (index) =>{
        
        onDelete(index)
       
    }

    return (
        <>
            {info.map((display, index) => (
                <div className="name-div" key={index}>
                    <p>{display.name}</p>
                    <button className="form-buttons" style={{backgroundColor: "#ff6961"}} onClick={() => handleClick(index)}>Delete</button>
                </div>
            ))}
        </>
    )
}