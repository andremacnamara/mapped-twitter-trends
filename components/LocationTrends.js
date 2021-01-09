import LocationTrendsBox from '../styles/LocationTrendsBox';
import Head from 'next/head'

const LocationTrends = ({ trends , location: { country, name }}) => {
    const renderedList = trends.map(trend  => {
        return (
          <>
            <li key={trend.tweet_volume}>{trend.name} <small> {trend.tweet_volume &&  - trend.tweet_volume}</small></li>
          </>
        );
      });
    
      return (
        <LocationTrendsBox>
          <Head>
            <title>Twitter trends for {country}</title>
          </Head>
          <h2>{country} Trends</h2>
          <ul>
            {renderedList}
          </ul>
        </LocationTrendsBox>
      );
};

export default LocationTrends;