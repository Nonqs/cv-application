
import { Input } from "./elementsHTML/Input"
import { useState } from "react";

export function Studies({ onChange, onSave}) {

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
        <h2>Studies</h2>
            {add
                ? <div className="info-form">
                    <Input onChange={handleChange} type="text" id="university" placeholder="University name" labelText="University" />
                    <Input onChange={handleChange} type="text" id="degree" placeholder="Degree" labelText="Degree" />
                    <Input onChange={handleChange} type="date" id="start" placeholder="Start date" labelText="Start date" />
                    <Input onChange={handleChange} type="date" id="finish" placeholder="Finish date" labelText="Finish" />
                    <button onClick={handleClickSave} >Save</button>

                </div>
                : <div>
                    <button onClick={handleClick}>+</button>
                </div>
            }
        </>
    )
}