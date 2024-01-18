import "../../styles/Displays.css"

export function StudiesDisplayShow({ saveStudies }) {

  

    return (
      <>
      {saveStudies &&
      <div className="information-cv">
        {saveStudies.map((study, index) => (
          <section key={index} className="cv-principal">
            <div className="studies">
              <div className="cv-studies">
                
                {study.start &&
                <article className="date">
                  {study.finish 
                  ?<span>{study.start} to {study.finish}</span>
                  :<span>{study.start} to Present</span>
                  }
                  </article>
                }
                
                <article className="cv-studies-text">
                  <span><strong>{study.name}</strong></span>
                  <span>{study.degree}</span>
                </article>
              </div>
            </div>
            <div className="experience"></div>
          </section>
        ))}
        </div>
        }
      </>
    );
  }