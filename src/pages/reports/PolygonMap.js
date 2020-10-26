import React, { useEffect, useRef } from 'react';
import { Polygon } from 'google-maps-react';

function PolygonMap({ paths, fillColor, strokeColor, ...props }) {
  const polygonRef = useRef();

  useEffect(() => {
    polygonRef.current.polygon.setOptions({
      paths,
      strokeColor: strokeColor,
      fillColor: fillColor,
    });
  }, [fillColor, paths, strokeColor]);

  return (
    <Polygon
      ref={polygonRef}
      paths={paths}
      strokeColor={strokeColor}
      strokeOpacity={0.75}
      strokeWeight={2}
      fillColor={fillColor}
      fillOpacity={0.5}
      {...props}
    />
  );
}

export default PolygonMap;
