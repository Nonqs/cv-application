import { CvDisplay } from "./components/CvDisplay"
import { PersonalInfo } from "./components/Personal-info"
import { useState } from "react"
import { Studies } from "./components/Studies"
import { Experience } from "./components/Experience"
import "./App.css"

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

    newInputValues[id] = value;

    setInputValueStudies(newInputValues);

  }

  const onSave = () => {

    const save = {...inputValueStudies}

    setSaveStudies((prevStudies) => [...prevStudies, save])

    setInputValueStudies([])   

  }

  const onChangeExperience  = (id, value) => {

    const newInputValues = { ...inputValueExperience };

    newInputValues[id] = value;

    setInputValueExperience(newInputValues);

    console.log(newInputValues)

  }

  const onSaveExperience = () => {

    const save = {...inputValueExperience}

    setSaveExperience((prevStudies) => [...prevStudies, save])

    console.log(saveExperience)

    setInputValueExperience([])

  }

  const onDelete = (index) => {

    console.log(index)
    
    const updatedList = [...saveStudies];
    updatedList.splice(index, 1);
    setSaveStudies(updatedList);

  }

  const onDeleteExperience = (index) => {

    console.log(index)
    
    const updatedList = [...saveStudies];
    updatedList.splice(index, 1);
    setSaveExperience(updatedList);

  };


  return (
    <>
      <div className="forms-div">
        <PersonalInfo onChange={onChange} />
        <Studies onChange={onChangeStudies} onSave={onSave} saveStudies={saveStudies} onDelete={onDelete} />
        <Experience onChange={onChangeExperience} onSave={onSaveExperience} saveExperience={saveExperience} onDelete={onDeleteExperience}/>
      </div>
      <CvDisplay inputValuesPersonal={inputValuePersonal} inputValueStudies={inputValueStudies} saveStudies={saveStudies} saveExperience={saveExperience}  />

    </>
  )
}