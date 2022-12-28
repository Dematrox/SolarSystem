import { Link } from "react-router-dom"

export const SatellitesCard = ({id, imageURL, celestial_bodies, title, description}) => {
  return (
      <Link className="moons-link hover" to={`/satellites/${id}`}> 
          <div className="row g-0 mb-2">
              <div className="col-md-4">
              <img src={imageURL} className="img-fluid rounded-start" alt={celestial_bodies}/>
              </div>
              <div className="col moon-card me-2">
                  <h5 className="card-title p-2">{title}</h5>
                  <p className="card-text card-title">{description}</p>
              </div>
          </div>
      </Link>
  )
}
