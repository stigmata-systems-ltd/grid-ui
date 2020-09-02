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
export const gridData = (lat, lng) => {
  const centers = getCenters(lat, lng);
  return [
    {
      lat: lat,
      lng: lng,
      title: "Grid-H1V1",
      description: "Center Grid",
      status: "inProgess",
      rectCords: getGridCords(lat, lng),
    },
    {
      lat: centers[0].latitude,
      lng: centers[0].longitude,
      title: "Grid-H1V2",
      description: "Right Grid",
      status: "inProgess",
      rectCords: getGridCords(centers[0].latitude, centers[0].longitude),
    },
    {
      lat: centers[1].latitude,
      lng: centers[1].longitude,
      title: "Grid-H1V3",
      description: "Bottom Grid",
      status: "inProgess",
      rectCords: getGridCords(centers[1].latitude, centers[1].longitude),
    },
    {
      lat: centers[2].latitude,
      lng: centers[2].longitude,
      title: "Grid-H1V4",
      description: "Left grid",
      status: "inProgess",
      rectCords: getGridCords(centers[2].latitude, centers[2].longitude),
    },
    {
      lat: centers[3].latitude,
      lng: centers[3].longitude,
      title: "Grid-H1V5",
      description: "Top grid",
      status: "inProgess",
      rectCords: getGridCords(centers[3].latitude, centers[3].longitude),
    },
  ];
};

export const gridStatic = [
  {grid: [
    { lat: 41.015585, lng: -109.0948787 },
    { lat: 41.023874, lng: -102.083413 },
    { lat: 37.040305, lng: -102.083413 },
    { lat: 37.022764, lng: -109.048745 },
  ]},
  {grid: [
    { lat: 40.046993, lng: -102.061440 },
    { lat: 39.962839, lng: -94.876382 },
    { lat: 37.022764, lng: -94.656655 },
    { lat: 37.075374, lng: -102.083413 },
  ]},
];
