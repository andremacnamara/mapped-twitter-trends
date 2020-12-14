import twitter from './twitter';

async function getTrends(woeid){
  try {
    const response = await twitter.get(`/trends/place.json?id=${woeid}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default async (req, res) => {
  const { woeid } = req.query;
  const trends = await getTrends(woeid);
  res.statusCode = 200
  res.json({ trends })
}