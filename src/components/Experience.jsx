import { useState } from "react";
import { Input } from "./elementsHTML/Input"
import { Div } from "./elementsHTML/Div";
import { ShowButton } from "./elementsHTML/ShowButton";

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
        
        ?<div>
            <ShowButton onClick={onClick} name="Experiences" />
        </div>
        
        :<div>
        <ShowButton onClick={onClick}  name="Experiences"/>
        {save
        ?<Div info={saveExperience} onDelete={onDeleteButton} />
        :<div></div>
        }
            {add
                ? <div className="info-form">
                    <Input onChange={handleChange} type="text" id="name" placeholder="Company name" labelText="Company" />
                    <Input onChange={handleChange} type="text" id="position" placeholder="Position in the company" labelText="Position" />
                    <Input onChange={handleChange} type="date" id="start" placeholder="Start date" labelText="Start date" />
                    <Input onChange={handleChange} type="date" id="finish" placeholder="Finish date" labelText="Finish" />
                    <Input onChange={handleChange} type="text" id="description" placeholder="Description" labelText="Description" />
                    <button onClick={handleClickSave} >Save</button>

                </div>
                : <div>
                    <button onClick={handleClick}>+</button>
                </div>
            }
        </div>
        }
        </>
    )

}