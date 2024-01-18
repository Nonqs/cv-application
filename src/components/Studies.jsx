/* eslint-disable react/prop-types */
import "../styles/Studies.css"
import { Div } from "./elementsHTML/Div";
import { Input } from "./elementsHTML/Input"
import { useState } from "react";
import { ShowButton } from "./elementsHTML/ShowButton";
import addSvg from "../img/add.svg"

export function Studies({ onChange, onSave, saveStudies, onDelete}) {

    const [add, setAdd] = useState(false)
    const [save, setSave] =useState(false)
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

    const onDeleteButton = (index) =>{
         
        onDelete(index)
    }

    const onClick = () =>{
        setShow(!show)
        setAdd(false)
    }

   
    return (
        <>
        {!show 
        ?<div className="studies-div">
            <ShowButton onClick={onClick} name="Studies"/>
        </div>
        :<div className="studies-div">
            
            <ShowButton onClick={onClick} name="Studies"/>
            {save &&
        
        <Div info={saveStudies} onDelete={onDeleteButton} />
        }
            {add
                ? <div className="form">
                    <Input onChange={handleChange} type="text" id="name" placeholder="University name" labelText="University" />
                    <Input onChange={handleChange} type="text" id="degree" placeholder="Degree" labelText="Degree" />
                    <Input onChange={handleChange} type="date" id="start" placeholder="Start date" labelText="Start date" />
                    <Input onChange={handleChange} type="date" id="finish" placeholder="Finish date" labelText="Finish" />
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
        </div>}
        </>
    )
}