import { useMemo } from "react";
import { getSetellitesByPlanet } from "../../helpers/getSetellitesByPlanet";
import { SatellitesCard } from "./SatellitesCard";

export const SatellitesList = ({celestial_bodies}) => {

    const moons = useMemo(() => getSetellitesByPlanet(celestial_bodies), [celestial_bodies]);

  return (
    <>
        <div className="row row-cols-1 row-cols-md-2 g-4 m-1 p-5">
            {moons.map(moon => <SatellitesCard key={moon.id}{...moon}/> )}
        </div>
    </>
  )
}
