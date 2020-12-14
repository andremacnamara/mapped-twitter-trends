import axios from 'axios';

const config = {
  headers: { 
    Authorization: `Bearer ${process.env.TWITTER_BEARER}`,
    
  }
};

async function fetchData(woeid){
  try {
    const response = await axios.get(`https://api.twitter.com/1.1/trends/place.json?id=${woeid}`, config);
    return response.data;
  } catch (e) {
    console.log('Error');
  }
};

export default async (req, res) => {
  const { woeid } = req.query;
  const trends = await fetchData(woeid);
  res.statusCode = 200
  res.json({ trends })
}