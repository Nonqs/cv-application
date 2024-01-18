import "../../styles/ShowButton.css"
import open from "../../img/open.svg"
import close from "../../img/close.svg"
import { useState } from "react"

export function ShowButton({ onClick, name }) {

    const [openButton, setOpenButton] = useState(false)

    const handleClick = () => {

        onClick()
        setOpenButton(!openButton)

    }

    return (
        <>
            {openButton
                ? <button className="show-button" onClick={handleClick} >
                    <h2 className="title-button">{name}</h2>
                    <img className="svg" src={close}></img>
                </button>
                : <button className="show-button" onClick={handleClick} >
                    <h2 className="title-button">{name}</h2>
                    <img className="svg" src={open}></img>
                </button>
            }
        </>
    )
}