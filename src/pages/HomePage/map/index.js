import React from "react";
import styled from 'styled-components'


import * as d3 from 'd3-geo-projection'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

import {geoCentroid} from 'd3-geo'



const algeriaUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/algeria/algeria-provinces.json"
const WorldUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
    count:66
  },
  { markerOffset: 15, name: "Algiers", coordinates: [36.42, 3.08].reverse(),count:46 },
  { markerOffset: 15, name: "Paris", coordinates: [48.50, 2.20].reverse(),count:10 },
  { markerOffset: 15, name: "Madrid", coordinates: [40.25, 3.45].reverse(),count:70 },
  { markerOffset: 15, name: "Rome", coordinates: [41.54, 12.29].reverse(),count:40 },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] ,count:16},
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013],count:32 },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637],count:13 },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852],count:42 },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011],count:6 },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806],count:5 },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464],count:89 }
];





const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 10000000) / 4 ;
  } else if (num > 100000000) {
    return Math.round(num / 1000000) / 4;
  } else {
    return Math.round(num / 1000000 / 3);
  }
};



const MapChart = ({setTooltip}) => {
  return (
    <ComposableMap
      data-tip=""
      // projection={d3.geoCylindricalEqualArea()}
      projectionConfig={{
        scale: 300,
        rotate:[0,0,0]
      }}
    ><ZoomableGroup>
      {/* {console.log(highDetailMap.objects.ne_10m_admin_1_states_provinces)} */}
      <Geographies geography={WorldUrl}>
        
        {({ geographies }) =>
        <>
            {geographies
            .map(geo => (
              <Geography
                
                onClick={() => console.log(geoCentroid(geo))}
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                strokeWidth={.1}
                stroke="#252525"
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none"
                    
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
              />
            ))}
            {geographies
              // .filter(d => countries.includes(d.properties.NAME))
              .map(geo => 
                  <Marker 
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    console.log(geo.properties)
                    setTooltip(`${NAME} — ${Math.floor(geo.properties.POP_EST/1000000)} Infected`);
                  }}
                  onMouseLeave={() => {
                    setTooltip("");
                  }}
                  
                  key={geo.id}  
                  coordinates={geoCentroid(geo)}>
                    <circle 
                    style={{
                      hover:{
                        fill: "#F53",
                      }
                    }}
                    r={Math.floor(rounded(geo.properties.POP_EST))} fill="rgba(255,0,0,0.2)" stroke="#ff0f26" strokeWidth={.5} />
                  </Marker>
                  )
              }
            </>
        }
      
      </Geographies>

      
      
      }
  
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart