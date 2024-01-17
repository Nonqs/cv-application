

export function ShowButton({ onClick, name }){

    const handleClick = () =>{

     onClick()

    }

    return(
        <>
        
        <button onClick={handleClick} >
        <h2>{name}</h2>
        </button>
        </>
    )
}