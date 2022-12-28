import { moons } from "../JSON/moons";

export const getSetellitesByPlanet = (celestial_bodies) => {

    const validCelestial_bodies = ['moons'];

    if(!validCelestial_bodies.includes(celestial_bodies)){
        throw new Error(`${celestial_bodies} is not valid`);
    } return moons.filter(moon => moon.celestial_bodies === celestial_bodies)

}
