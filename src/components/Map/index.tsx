import React, { useState, useEffect, useRef } from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GetPixelSize } from '../../utils/GetPixelSize';

import Search from '../Search';
import Details from '../Details';
import Directions from '../Directions';

import markerImage from '../../assets/download4.png';
import backIcon from '../../assets/back.png';

import styles,{
  Container, 
  MapStyle,
  LocationBox, 
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
  BackButton
} from './styles';

const MapComponent: React.FC = () => {


  const MapViewRef = useRef<any>();

  const [location, setLocation] = useState<any>();
  const [destination, setDestination] = useState<any>();

  const [duration, setDuration] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);

  const handleLocationSelected = (data: any, { geometry }: { geometry: any }) => {

    const { location: { lat: latitude, lng: longitude } } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text
    });

  }

  const requestUserPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      alert('Precisamos de sua localização');
    }

    let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

    const response = await Location.reverseGeocodeAsync({ latitude, longitude });

    setLocation({
      latitude,
      longitude,
      latitudeDelta: 0.0133,
      longitudeDelta: 0.0134,
      title: response[0].street
    });
  }

  const handleBack = () => {
    setDestination(null);
  }

  useEffect(() => {
    requestUserPosition();
  }, []);

  return (
    <Container>
      <MapStyle
        region={location}
        showsUserLocation
        loadingEnabled
        ref={MapViewRef}
      >
        {destination && (
          <>
            <Directions
              origin={location}
              destination={destination}
              // @ts-ignore
              apikey={process.env.API_GOOGLEMAPS}
              onReady={(result: any) => {

                setTimeout(() => {
                  MapViewRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: GetPixelSize(50),
                      left: GetPixelSize(50),
                      top: GetPixelSize(50),
                      bottom: GetPixelSize(350)
                    },
                    animated: true
                  });
                }, 500);

                setDuration(Math.floor(result.duration));
                setDistance(result.distance)

              }}
            />
            <Marker
              coordinate={destination}
              anchor={{ x: 0, y: 0 }}
              image={markerImage}
            >
              <LocationBox style={styles.locationBox}>
                <LocationTimeBox>
                  <LocationTimeText>{duration}</LocationTimeText>
                  <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                </LocationTimeBox>
                <LocationText>
                  {destination.title}
                </LocationText>
              </LocationBox>
            </Marker>
            <Marker
              coordinate={location}
              anchor={{ x: 0, y: 0 }}
            >
              <LocationBox>
                <LocationText>
                  {location.title}
                </LocationText>
              </LocationBox>
            </Marker>

          </>
        )}
      </MapStyle>



      {destination ? (
        <>
          <BackButton onPress={handleBack}>
            <Image source={backIcon}></Image>
          </BackButton>
          <Details distance={distance} />
        </>
      ) : (
          <Search onLocationSelected={handleLocationSelected} />
        )}

    </Container>
  )
}

export default MapComponent;