import { useState } from "react";
import { Input } from "./elementsHTML/Input"

export function Experience({ onChange, onSave }){

    const [add, setAdd] = useState(false)

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

    }

   
    return (
        <>
        <h2>Experience</h2>
            {add
                ? <div className="info-form">
                    <Input onChange={handleChange} type="text" id="company" placeholder="Company name" labelText="Company" />
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
        </>
    )

}