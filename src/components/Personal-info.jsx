import { Input } from "./elementsHTML/Input"
import "../styles/PersonalInfo.css"

export function PersonalInfo({ onChange }) {


    const handleChange = (id, newValue) => {

        if (onChange) {
            onChange(id, newValue);
        }
    }

    return (
        <>
            <div className="info-form">
                <h2>Personal info</h2>
                <Input onChange={handleChange} type="text" id="name" placeholder="Full name" labelText="Full name" />
                <Input onChange={handleChange} type="email" id="email" placeholder="Email" labelText="Email" />
                <Input onChange={handleChange} type="number" id="number" placeholder="Number" labelText="Phone number" />
                <Input onChange={handleChange} type="address" id="address" placeholder="Cyty, country" labelText="Address" />
            </div>
        </>
    )
}