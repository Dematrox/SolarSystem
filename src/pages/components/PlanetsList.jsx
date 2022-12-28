import { useMemo } from "react";
import { getPlanetByCelestial_Bodies } from "../../helpers/getPlanetByCelestial_Bodies";
import { PlanetsCard } from "./PlanetsCard";

export const PlanetsList = ({celestial_bodies}) => {

    const planets = useMemo(() => getPlanetByCelestial_Bodies(celestial_bodies), [celestial_bodies]);

  return (
    <>
        <div className="row row-cols-1 row-cols-md-4 g-4 m-1 p-5">
            {planets.map(planet => <PlanetsCard key={planet.id}{...planet}/> )}
        </div>
    </>
  )
}
