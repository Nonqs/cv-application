/* eslint-disable react/prop-types */

import { Div } from "./elementsHTML/Div";
import { Input } from "./elementsHTML/Input"
import { useState } from "react";
import { ShowButton } from "./elementsHTML/ShowButton";

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
    }

   
    return (
        <>
        {!show 
        ?<div>
            <ShowButton onClick={onClick} name="Studies"/>
        </div>
        :<div>
            
            <ShowButton onClick={onClick} name="Studies"/>
            {!save
        ?<div></div>
        :<Div info={saveStudies} onDelete={onDeleteButton} />
        }
            {add
                ? <div className="info-form">
                    <Input onChange={handleChange} type="text" id="name" placeholder="University name" labelText="University" />
                    <Input onChange={handleChange} type="text" id="degree" placeholder="Degree" labelText="Degree" />
                    <Input onChange={handleChange} type="date" id="start" placeholder="Start date" labelText="Start date" />
                    <Input onChange={handleChange} type="date" id="finish" placeholder="Finish date" labelText="Finish" />
                    <button onClick={handleClickSave} >Save</button>

                </div>
                : <div>
                    <button onClick={handleClick}>+</button>
                </div>
            }
        </div>}
        </>
    )
}