const RECT_DIST = 0.000449;
const CENTER_DIST = 0.000898;

const getTopLeft = (lat, lng) => {
  let nLat = lat + RECT_DIST;
  let nLng = lng - RECT_DIST;
  return {
    nLat,
    nLng,
  };
};
const getTopRight = (lat, lng) => {
  let nLat = lat + RECT_DIST;
  let nLng = lng + RECT_DIST;
  return {
    nLat,
    nLng,
  };
};
const getBottomRight = (lat, lng) => {
  let nLat = lat - RECT_DIST;
  let nLng = lng + RECT_DIST;
  return {
    nLat,
    nLng,
  };
};
const getBottomLeft = (lat, lng) => {
  let nLat = lat - RECT_DIST;
  let nLng = lng - RECT_DIST;
  return {
    nLat,
    nLng,
  };
};
const getGridCords = (lat, lng) => {
  const topLeft = getTopLeft(lat, lng);
  const topRight = getTopRight(lat, lng);
  const bottomRight = getBottomRight(lat, lng);
  const bottomLeft = getBottomLeft(lat, lng);
  return [
    {
      lat: topLeft.nLat,
      lng: topLeft.nLng,
    },
    {
      lat: topRight.nLat,
      lng: topRight.nLng,
    },
    {
      lat: bottomRight.nLat,
      lng: bottomRight.nLng,
    },
    {
      lat: bottomLeft.nLat,
      lng: bottomLeft.nLng,
    },
    {
      lat: topLeft.nLat,
      lng: topLeft.nLng,
    },
  ];
};
const getCenters = (lat, lng) => {
  let right = {
    latitude: lat,
    longitude: lng + CENTER_DIST,
  };
  let top = {
    latitude: lat + CENTER_DIST,
    longitude: lng,
  };
  let left = {
    latitude: lat,
    longitude: lng - CENTER_DIST,
  };
  let bottom = {
    latitude: lat - CENTER_DIST,
    longitude: lng,
  };
  return [right, bottom, left, top];
};
export const gridData = gridDetails => {
  console.log(`Grid Details MapUtils: ${JSON.stringify(gridDetails)}`);
  // const centers = getCenters(lat, lng);
  const gridData = gridDetails && gridDetails.lstGridDtls && gridDetails.lstGridDtls.map(item => ({
    lat: item.marker_latitide,
    lng: item.marker_longitude,
    title: item.gridno,
    status: item.status,
    rectCords: item.gridGeoLocation,
  }));
  return gridData;
};

export const gridStatic = [
  {
    grid: [
      { lat: 41.015585, lng: -109.0948787 },
      { lat: 41.023874, lng: -102.083413 },
      { lat: 37.040305, lng: -102.083413 },
      { lat: 37.022764, lng: -109.048745 },
    ],
  },
  {
    grid: [
      { lat: 40.046993, lng: -102.06144 },
      { lat: 39.962839, lng: -94.876382 },
      { lat: 37.022764, lng: -94.656655 },
      { lat: 37.075374, lng: -102.083413 },
    ],
  },
];
