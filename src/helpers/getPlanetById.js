import { planets } from "../JSON/planets";


export const getPlanetById = (id) => {
      
    return planets.find(planet => planet.id === id);

}