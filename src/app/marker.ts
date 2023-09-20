export default interface Marker {

  label?: string;
  draggable: boolean;
  name: string;
  title: string
  position :{
    lat: number
    lng: number
  }
}
