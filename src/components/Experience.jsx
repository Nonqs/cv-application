import { useState } from "react";
import { Input } from "./elementsHTML/Input"
import { Div } from "./elementsHTML/Div";
import { ShowButton } from "./elementsHTML/ShowButton";
import "../styles/Experience.css"
import addSvg from "../img/add.svg"

export function Experience({ onChange, onSave, saveExperience, onDelete }){

    const [add, setAdd] = useState(false)
    const [save, setSave] = useState(false)
    const [show, setShow] = useState(false)

    const handleChange = (id, newValue) => {

        if (onChange) {
            onChange(id, newValue);
        }
    }

    const handleClick = () => {

        setAdd(!add)

    }

    const handleClickSave = () =>{

      onSave();
      setAdd(!add)
      setSave(true)

    }

    const onDeleteButton = (index)=>{

        onDelete(index)

    }

    const onClick = () =>{
        setShow(!show)
    }

   
    return (
        <>
        {!show
        
        ?<div className="experience-div">
            <ShowButton onClick={onClick} name="Experiences" />
        </div>
        
        :<div className="experience-div">
        <ShowButton onClick={onClick}  name="Experiences"/>
        {save &&
        <Div info={saveExperience} onDelete={onDeleteButton} />
        }
            {add
                ? <div className="form">
                    <Input onChange={handleChange} type="text" id="name" placeholder="Company name" labelText="Company" />
                    <Input onChange={handleChange} type="text" id="position" placeholder="Position in the company" labelText="Position" />
                    <Input onChange={handleChange} type="date" id="start" placeholder="Start date" labelText="Start date" />
                    <Input onChange={handleChange} type="date" id="finish" placeholder="Finish date" labelText="Finish" />
                    <Input onChange={handleChange} type="text" id="description" placeholder="Description" labelText="Description" />
                    <div className="buttons-div">
                    <button className="form-buttons" onClick={handleClick} style={{backgroundColor: "#ff6961"}}>Close</button>
                    <button className="form-buttons" onClick={handleClickSave} style={{backgroundColor: "#77dd77"}} >Save</button>
                    </div>

                </div>
                : <div>
                    <button className="add-button" onClick={handleClick}>
                    <img src={addSvg} alt="add svg" className="svg-form" />
                    </button>
                </div>
            }
        </div>
        }
        </>
    )

}