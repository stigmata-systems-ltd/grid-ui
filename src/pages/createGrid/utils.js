export const transformPolygon = (data) => {
  let points = [];
  data &&
    data.map((item) => {
      points.push({
        lat: item.latitude,
        lng: item.longitude,
      });
    });
  return points;
};
