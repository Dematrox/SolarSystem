import { Link } from "react-router-dom";
import logo from '../componets/logo.svg'

export const Otro = () => {
  return (
    <>
      <div className='background-otro animate__animated animate__fadeIn animate__faster'>
          <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
          <h1 className='text-otro'>We are working on updates</h1>
      <div className="proximamente">
        Coming soon exoplanets, black holes, galaxies and stars
      </div>
      <Link to='/'>
        <button className="btn btn-danger btn-otro">
            Back
        </button>
      </Link>
      </div>
    </>
  )
}
