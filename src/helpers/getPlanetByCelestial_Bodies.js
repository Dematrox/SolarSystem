import { planets } from "../JSON/planets";

export const getPlanetByCelestial_Bodies = (celestial_bodies) => {

    const validCelestial_bodies = ['planets'];

    if(!validCelestial_bodies.includes(celestial_bodies)){
        throw new Error(`${celestial_bodies} is not valid`);
    } return planets.filter(planet => planet.celestial_bodies === celestial_bodies);

}