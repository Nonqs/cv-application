/* eslint-disable react/prop-types */
import "../styles/CvDisplay.css"
import { ExperienceDisplay } from "./elementsHTML/ExperienceDisplay"
import { StudiesDisplayShow } from "./elementsHTML/StudiesDisplayshow"

export function CvDisplay({ inputValuesPersonal, saveStudies, saveExperience }) {

    return (
        <>
            <div className="cv-main">
                <section className="cv-header">
                    <h2>{inputValuesPersonal.name}</h2>
                    <article>
                        <span className="cv-personal-text">{inputValuesPersonal.email}</span>
                        <span className="cv-personal-text">{inputValuesPersonal.number}</span>
                        <span className="cv-personal-text">{inputValuesPersonal.address}</span>
                    </article>
                </section>
                
                <section className="cv-personal-info">
                <h3 className="cv-title">Studies</h3>
                <StudiesDisplayShow saveStudies={saveStudies} />
                
                <h3 className="cv-title">Experience</h3>
                <ExperienceDisplay saveExperience={saveExperience} />
                </section>
                
            </div>
        </>
    )

}