import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const defaultCenter = { lat: 9.302301, lng: -75.386419 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={20}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "280px" };
const mapElementStyle = { height: "100%" };

export default function GoogleMaps() {
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuf9Qwrmem87YsldGQf3lOFkluuxoN_3Y"
      loadingElement={<div style={loadingElementStyle} />}
      containerElement={<div style={containerElementStyle} />}
      mapElement={<div style={mapElementStyle} />}
    />
  );
}
