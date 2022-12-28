import { Link } from "react-router-dom"

export const PlanetsCard = ({id, celestial_bodies, imageURL, description, nickName}) => {
  return (
        <Link className="hover" to={`/planets/${id}`}>
            <div className="col">
                <div className="card card bg-dark text-white">
                <img src={imageURL} className="card-img img" alt={celestial_bodies}/>
                    <div className="card-img-overlay text-title-card">
                        <h1 className="card-title">{id}</h1>
                    </div>
                    <div className="card-img-overlay text-end-describ">
                        <p className="card-text">{description}</p><h5 className="card-text">{nickName}</h5> 
                    </div>
                </div>
            </div>
        </Link>
  )
}
