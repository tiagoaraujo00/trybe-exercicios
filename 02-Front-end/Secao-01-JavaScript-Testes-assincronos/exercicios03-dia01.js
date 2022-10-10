const getPlanet = () => {
  const marte = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => console.log('Returned planet: ', marte), 4000);
};

getPlanet(); // Imprime Marte depois de 4 segundos