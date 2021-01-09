import axios from 'axios';
  
export default axios.create({
  baseURL: 'https://api.twitter.com/1.1',
  headers: { 
    Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAC6EKQEAAAAAug3JN2F18r8q%2Fmvu7O%2FBBcV9T4Y%3Dnot9kqfCxJNHFHYfbDQER2J0YHbfgJGAIDgoRgcnuX7DJHJg2A`,
  }
});