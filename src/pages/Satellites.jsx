import { NavBar } from "../componets/NavBar";
import { SatellitesList } from './components/SatellitesList'

export const Satellites = () => {
    return (
        <div className='background-planets animate__animated animate__fadeIn animate__slow'>
          <NavBar/>
          <div className="m-4 ms-5 text-center p-5 white"> 
            <h3 className="p-5">What is a moon?</h3>
            <p>Moons – also known as natural satellites – orbit planets and asteroids in our solar system. Earth has one moon, and there are more than 200 moons in our solar system. Most of the major planets – all except Mercury and Venus – have moons. Pluto and some other dwarf planets, as well as many asteroids, also have small moons. Saturn and Jupiter have the most moons, with dozens orbiting each of the two giant planets.</p>
            <br />
            <p>Moons come in many shapes, sizes, and types. A few have atmospheres and even hidden oceans beneath their surfaces. Most planetary moons probably formed from the discs of gas and dust circulating around planets in the early solar system, though some are "captured" objects that formed elsewhere and fell into orbit around larger worlds.</p>
          </div>
          <div>
            <SatellitesList celestial_bodies={'moons'}/>
          </div>
        </div>
      )
}
