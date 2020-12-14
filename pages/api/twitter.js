import axios from 'axios';
  
export default axios.create({
  baseURL: 'https://api.twitter.com/1.1',
  headers: { 
    Authorization: `Bearer ${process.env.TWITTER_BEARER}`,
  }
});