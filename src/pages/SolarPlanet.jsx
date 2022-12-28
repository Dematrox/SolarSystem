import { useMemo } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { getPlanetById } from '../helpers/getPlanetById';
import logo from '../componets/logo.svg'

export const SolarPlanet = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const planets = useMemo(() =>  getPlanetById(id), [id]);

    const onNavigateBack = () => {
      navigate(-1);
    }

    if(!planets){
        return  <Navigate to="/"/>
      }

  return (
    <>
        <div className='animate__animated animate__fadeIn animate__slow'>
          <div className={planets.background}>
          <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
          <div class="text-white">
            <div class="card-img-overlay main-card p-5">
              <h4 className='text-center pe-5'>{planets.id}</h4>
              <div className='card-group'>
                <div className='card-body group pt-3'>
                  <p className="card-text"><b className='pe-2'>Moons: </b> {planets.satellites}</p>
                  <p className="card-text"><b className='pe-2'>Orbital velocity: </b> {planets.orbital_velocity}</p>
                  <p className="card-text"><b className='pe-2'>Diameter: </b> {planets.diameter}</p>
                  <p className="card-text"><b className='pe-2'>Radio: </b> {planets.radio}</p>
                  <p className="card-text"><b className='pe-2'>Mass: </b> {planets.mass}</p>
                  <p className="card-text"><b className='pe-2'>Volume: </b> {planets.volume}</p>
                  <p className="card-text"><b className='pe-2'>Gravity: </b> {planets.gravity}</p>
                  <p className="card-text"><b className='pe-2'>Escape velocity: </b> {planets.escape_velocity}</p>
                  <p className="card-text"><b className='pe-2'>Rotation period: </b> {planets.rotation_period}</p>
                  <p className="card-text"><b className='pe-2'>Sidereal period: </b> {planets.sidereal_period}</p>
                  {planets.id != 'Earth' 
                  ?  <p class="card-text"><b className='pe-2'>Synodic period: </b> {planets.synodic_period}</p>
                  : <></>
                }
                </div>
                <div className='card-body group pt-3 m-2'>
                  <h5><b>More data</b></h5>
                  <p className='pt-3'>{planets.more_data}</p>
                  <button className='btn btn-outline-danger d-grid mt-5' onClick={onNavigateBack}>Back</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}
