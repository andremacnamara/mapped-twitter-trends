import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationTrends from './LocationTrends';
import { getWoeid, getTrends} from '../lib/twitter/apis';
import MapStyles from '../styles/Map';

const Map = ({ center, zoom}) => {

    const [ trends, setTrends ] = useState('');
    const [ locationData, setLocationData ] = useState('');

    const onMapClick = async ({ lat, lng }) => {
        const location = await getWoeid(lat, lng);
        setLocationData(location);
        const trendsData = await getTrends(location.woeid);
        setTrends(trendsData.slice(0,10));
    };

    return (
        <MapStyles>
          <GoogleMapReact 
              bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
              defaultCenter={center}
              defaultZoom={zoom}
              onClick={(e) => onMapClick(e)}
          />            
          {trends && <LocationTrends trends={trends} location={locationData}/>}
        </MapStyles>

    );
};

Map.defaultProps = {
    center: {
        lat: 53.3439,
        lng: 33.0622
    },
    zoom: 5
};

export default Map;