import { Route, Routes } from "react-router-dom";
import { SolarSystem, SolarPlanet, Satellites, Planets, Otro } from "../pages/";
import { MoonsPlantes } from "../pages/MoonsPlantes";

export const SolarSystemRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="planets" element={<Planets/>}/>
            <Route path="otro" element={<Otro/>}/>
            <Route path="satellites" element={<Satellites/>}/>
            <Route path="/" element={<SolarSystem/>}/>

            <Route path="planets/:id" element={<SolarPlanet/>}/>
            <Route path="satellites/:id" element={<MoonsPlantes/>}/>
        </Routes>
    </>
  )
}
