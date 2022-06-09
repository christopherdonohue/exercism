// Chris Donohue - June 8th, 2022
export const age = (planet, seconds) => {
  const EARTH_SECONDS_IN_YEAR = 31557600;
  const planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  const yearsOld = (seconds / EARTH_SECONDS_IN_YEAR) * (1 / planets[planet]);

  return +yearsOld.toFixed(2);
};
