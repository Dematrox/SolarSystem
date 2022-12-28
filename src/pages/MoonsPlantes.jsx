import React, { useMemo } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { getMoonsById } from '../helpers/getMoonsById';
import logo from '../componets/logo.svg';

export const MoonsPlantes = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const moons = useMemo(() =>  getMoonsById(id), [id]);
  const onNavigateBack = () => {
    navigate(-1);
  }

  if(!moons){
    return  <Navigate to="/"/>
  }

  return (
    <>
        <div className='animate__animated animate__fadeIn animate__slow'>
          <div className='background-moon'>
          <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
          <div class="text-white">
            <div class="card-img-overlay main-card p-5">
              <h4 className='text-center pe-5'></h4>
              <div className='card-group'>
                <div className='card-body group pt-3'>
                  <p className="card-text"><b className='pe-2'>{moons.title}:</b> </p>
                  <p className='ps-3'>{moons.moons}</p>
                  <p>{moons.data}</p>
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
