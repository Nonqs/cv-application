/* eslint-disable react/prop-types */
import "../../styles/Displays.css"

export function ExperienceDisplay({ saveExperience}) {

    return (
      <>
      {saveExperience &&
      <div>
        {saveExperience.map((exp, index) => (
          <section key={index} className="cv-principal" id={index}>
            <div className="studies">
              <div className="cv-studies">
              {exp.start &&
                <article className="date">
                  {exp.finish 
                  ?<span>{exp.start} to {exp.finish}</span>
                  :<span>{exp.start} to Present</span>
                  }
                  </article>
                }
                <article className="cv-studies-text">
                  <span><strong>{exp.name}</strong></span>
                  <span>{exp.position}</span>
                </article>
              </div>
              <article>
                <span className="experience-desc">{exp.description}</span>
              </article>
            </div>
            <div className="experience"></div>
          </section>
        ))}
        </div>
        }
      </>
    );
  }