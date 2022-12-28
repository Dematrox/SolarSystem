import React from 'react'
import { NavBar } from '../componets/NavBar'
import { PlanetsList } from './components/PlanetsList'

export const Planets = () => {
  return (
    <div className='background-planets animate__animated animate__fadeIn animate__slow'>
      <NavBar/>
      
      <PlanetsList celestial_bodies={'planets'}/>
    </div>
  )
}
