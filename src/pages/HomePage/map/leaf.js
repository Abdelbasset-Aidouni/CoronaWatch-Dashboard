import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup,Tooltip,CircleMarker } from 'react-leaflet'
import L, { circle } from 'leaflet'
import styled from 'styled-components'
import data from '../../../data/cases.json'
import {getNationalZones} from '../../../services/statistics'
const CustomCircle = styled(CircleMarker)`
  stroke-width: 1;
  &:hover{
    fill:blue;
    stroke:blue;
  }
`
const rounded = num => {
  if (num > 100000) {
    return Math.round(num / 10000);
  } else if (num > 50000) {
    return Math.round(num / 10000);
  } else if (num > 10000) {
    return Math.round(num / 1000) / 4;
  } else {
    return Math.round(num / 100 / 4);
  }
};
const infectedList = data.data.map(e => e.infected)
const maxInfectedCount = Math.max(...infectedList)
// const getRadius = (count) => {
//   return (10 + (count/maxInfectedCount) * 30 )
// }

export default class SimpleExample extends Component{
  state = {
    lat: 35.191767,
    lng: 2.930613,
    zoom: 6,
    data:[],
  }

  getRadius = (count) => {
    const infectedList = this.state.data.map(e => e.infected)
    const maxInfectedCount = Math.max(...infectedList)
    return (5 + (count/maxInfectedCount) * 30 )
  }

  componentDidMount() {
    const fetchData = async () =>{
      await getNationalZones().then(res =>{
        if (res.ok){
          res.json().then(json => this.setState(state => ({...state,data:json.results})))
        }
      })
    }
    fetchData()
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map 
      center={position} 
      zoom={this.state.zoom}
      style={{ width: '100%', height: '100%'}}>
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.data.map(geo =>
            <CustomCircle  center={[geo.x,geo.y]} radius={this.getRadius(geo.infected)} fillColor="#ff0f26" color="#ff0f26" >
              <Tooltip>
                {geo.name} : {geo.infected} infected
              </Tooltip>
            </CustomCircle>
          )}
        
      </Map>
    )
  }
}