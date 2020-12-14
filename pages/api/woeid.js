import axios from 'axios';

const config = {
  headers: { 
    Authorization: `Bearer ${process.env.TWITTER_BEARER}`,
    
  }
};

async function fetchData(lat, lng){
  try {
    const response = await axios.get(`https://api.twitter.com/1.1/trends/closest.json?lat=${lat}&long=${lng}`, config);
    const { country, name, woeid } = response.data[0];
    const object = {
      country,
      name,
      woeid
    };
    return object;
  } catch (e) {
    console.log(e);
  }
};

export default async (req, res) => {
  const { lat, lng } = req.query;
  const data = await fetchData(lat, lng);
  res.statusCode = 200
  res.json({ woeid: data })
}