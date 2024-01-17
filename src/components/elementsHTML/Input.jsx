import { useState } from "react";

export function Input({ id, placeholder, type, labelText, onChange }) {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
    
        if (onChange) {
          onChange(id, newValue);
        }
      }

    return(
        <>
        <label htmlFor={id}>{labelText}</label>
        <input onChange={handleChange} name={id} type={type} id={id} placeholder={placeholder} />
        </>
    )

}