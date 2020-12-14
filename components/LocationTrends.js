import LocationTrendsBox from '../styles/LocationTrendsBox';

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
          <h2>{name} - {country}</h2>
          <ul>
            {renderedList}
          </ul>
        </LocationTrendsBox>
      );
};

export default LocationTrends;