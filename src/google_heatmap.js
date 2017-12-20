import fp from 'lodash/fp';

export const generateHeatmap = (instance, {
    positions
  }) => {
    console.log(instance);
    console.log(positions);
    return new instance.visualization.HeatmapLayer({
        data: fp.reduce(
          (acc, {
            lat,
            lng,
            weight = 0,
          }) => {
            acc.push({
              location: new instance.LatLng(lat, lng),
              weight
            });
            return acc;
          }, [],
          positions
        ),
      });
  }
  

export const optionsHeatmap = (instance, {
    options
  }) =>
  fp.map(
    option => instance.set(option, options[option]),
    Object.keys(options || {})
  );
