import React from "react"

const Stats = () => {
  return (
    <section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <img src="/assets/img/stats-img.svg" alt="" className="img-fluid" />
          </div>

          <div className="col-lg-6">
            <div className="stats-item d-flex align-items-center">
              <span className="purecounter">232</span>
              <p>
                <strong>Happy Clients</strong> consequuntur quae diredo para
                mesta
              </p>
            </div>

            <div className="stats-item d-flex align-items-center">
              <span className="purecounter">521</span>
              <p>
                <strong>Projects</strong> adipisci atque cum quia aut
              </p>
            </div>

            <div className="stats-item d-flex align-items-center">
              <span className="purecounter">453</span>
              <p>
                <strong>Hours Of Support</strong> aut commodi quaerat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
