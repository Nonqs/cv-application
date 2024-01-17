import "./displays.css"

export function StudiesDisplayShow({ saveStudies }) {

  

    return (
      <>
      {saveStudies &&
      <div>
        {saveStudies.map((study, index) => (
          <section key={index} className="cv-principal" id={study.name}>
            <div className="studies">
              <div className="cv-studies">
                <article>
                  <span>{study.start} to {study.finish}</span>
                </article>
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