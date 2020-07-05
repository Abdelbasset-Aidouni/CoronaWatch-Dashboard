import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup,Tooltip,CircleMarker } from 'react-leaflet'
import L, { circle } from 'leaflet'
import styled from 'styled-components'
import data from '../../../data/cases.json'
import {getNationalZones,getInterationalZones} from '../../../services/statistics'
import {useSelector,useDispatch} from 'react-redux'

import store from '../../../store/store'


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
    currentMode:"national"
  }
  constructor(props) {
    super(props);
    this.state = {
      lat: 35.191767,
      lng: 2.930613,
      zoom: 2,
      data:[],
      currentMode:"national"
    }
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), 
      // we will update local component state and force component to rerender 
      // with new data.

      this.setState({
        ...this.state,
        currentMode: store.getState().currentMapMode
      });
    })
  }

  
  getRadius = (count) => {
    const infectedList = this.state.data.map(e => e.infected)
    const maxInfectedCount = Math.max(...infectedList)
    return (5 + (count/maxInfectedCount) * 30 )
  }

  componentDidMount() {
    const fetchData = async () =>{
      let response;
      if (this.state.currentMode === "national") response = getNationalZones()
      else response = getInterationalZones()
      await response.then(res =>{
        if (res.ok){
          res.json().then(json => this.setState(state => ({...state,
            data:json.results,
            zoom:state.currentMode === "national" ? 6 : 2})))
        }
      })
    }
    fetchData()
  }

  componentDidUpdate(prevProps,prevState){
    const fetchData = async () =>{
      let response;
      if (this.state.currentMode === "national") response = getNationalZones()
      else response = getInterationalZones()
      await response.then(res =>{
        if (res.ok){
          res.json().then(json => this.setState(state => ({...state,
            data:json.results,
            zoom:state.currentMode === "national" ? 6 : 2
          })))
        }
      })
    }
    if (prevState.currentMode !== this.state.currentMode){
      fetchData()
    } 
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map 
      center={position} 
      zoom={this.state.zoom}
      style={{ width: '100%', height: '100%'}}>
      
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