import { moons } from "../JSON/moons";


export const getMoonsById = (id) => {
      
    return moons.find(moon => moon.id === id);

}