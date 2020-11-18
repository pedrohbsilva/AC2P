import React from 'react';
import MapViewDirections, {MapViewDirectionsProps} from 'react-native-maps-directions'

const Directions: React.FC<MapViewDirectionsProps> = ({destination, origin, onReady,apikey}) => {
  return (
    <MapViewDirections 
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey={apikey}
      strokeWidth={3}
      strokeColor="#2e77be"
    />
  );
}

export default Directions;