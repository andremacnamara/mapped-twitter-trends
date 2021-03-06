import axios from 'axios';

export const getWoeid = async (lat, lng) => {
    const response = await axios.get('/api/woeid', {
        params: {
          lat: lat,
          lng: lng
        },
      });

    return response.data.woeid;
};

export const getTrends = async (woeid) => {
    const response = await axios.get('/api/trends', {
        params: {
            woeid
        },
    });
    return response.data.trends[0].trends;
};