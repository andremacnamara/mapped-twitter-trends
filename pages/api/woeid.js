import twitter from './twitter';

async function getWoeid(lat, lng){
  try {
    const response = await twitter.get(`/trends/closest.json?lat=${lat}&long=${lng}`);
    const { country, name, woeid } = response.data[0];

    return { country, name, woeid };
  } catch (e) {
    console.log(e);
  }
};

export default async (req, res) => {
  const { lat, lng } = req.query;
  const data = await getWoeid(lat, lng);
  res.statusCode = 200
  res.json({ woeid: data })
}