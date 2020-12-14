import { useState } from 'react';
import LocationTrends from './LocationTrends';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const Map = ({ center, zoom}) => {

    const [ trends, setTrends ] = useState('');
    const [ locationData, setLocationData ] = useState('');

    const onMapClick = async ({ lat, lng }) => {
        const location = await getWoeid(lat, lng);
        setLocationData(location);
        const trendsData = await getTrends(location.woeid);
        setTrends(trendsData.slice(0,10));
    };

    const getWoeid = async (lat, lng) => {
        const response = await axios.get('http://localhost:3000/api/woeid', {
            params: {
              lat: lat,
              lng: lng
            },
          });

        return response.data.woeid;
      };

      const getTrends = async (woeid) => {
        const response = await axios.get('http://localhost:3000/api/trends', {
            params: {
                woeid
            },
          });


        return response.data.trends[0].trends;
      };

    return (
        <div className="map">
            <GoogleMapReact 
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={(e) => onMapClick(e)}
            />            
            {trends && <LocationTrends trends={trends} location={locationData}/>}

        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 53.3439,
        lng: 33.0622
    },
    zoom: 5
}

export default Map;