import { CvDisplay } from "./components/CvDisplay"
import { PersonalInfo } from "./components/Personal-info"
import { useState } from "react"
import { Studies } from "./components/Studies"
import { Experience } from "./components/Experience"

export function App() {

  const [inputValuePersonal, setInputValuePersonal] = useState({})
  const [inputValueStudies, setInputValueStudies] = useState({})
  const [inputValueExperience, setInputValueExperience] = useState({})
  const [saveStudies, setSaveStudies] = useState([])
  const [saveExperience, setSaveExperience] = useState([])

  

    const onChange = (id, value) => {
      setInputValuePersonal((prevInputValues) => ({
        ...prevInputValues,
        [id]: value,
      }));
    };

  const onChangeStudies  = (id, value) => {

    const newInputValues = { ...inputValueStudies };

    // Actualiza el valor del input correspondiente
    newInputValues[id] = value;

    // Actualiza el estado con el nuevo objeto
    setInputValueStudies(newInputValues);

    

  }

  const onSave = () => {

    const save = {...inputValueStudies}

    setSaveStudies((prevStudies) => [...prevStudies, save])

    console.log(saveStudies)
    console.log(saveStudies[0])

  }

  const onChangeExperience  = (id, value) => {

    const newInputValues = { ...inputValueExperience };

    // Actualiza el valor del input correspondiente
    newInputValues[id] = value;

    // Actualiza el estado con el nuevo objeto
    setInputValueExperience(newInputValues);

    console.log(newInputValues)

  }

  const onSaveExperience = () => {

    const save = {...inputValueExperience}

    setSaveExperience((prevStudies) => [...prevStudies, save])

    console.log(saveExperience)

  }

  return (
    <>
      <div>
        <PersonalInfo onChange={onChange} />
        <Studies onChange={onChangeStudies} onSave={onSave} saveStudies={saveStudies} />
        <Experience onChange={onChangeExperience} onSave={onSaveExperience} />
      </div>
      <CvDisplay inputValuesPersonal={inputValuePersonal} inputValueStudies={inputValueStudies} saveStudies={saveStudies} saveExperience={saveExperience}  />

    </>
  )
}