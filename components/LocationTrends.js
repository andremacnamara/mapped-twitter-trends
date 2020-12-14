const LocationTrends = ({ trends , location: { country, name }}) => {
    const renderedList = trends.map(trend  => {
        return (
          <>
            <li>{trend.name} <small> {trend.tweet_volume &&  - trend.tweet_volume}</small></li>
          </>
        );
      });
    
      return (
        <div className="location-info">
          <h2>{name} - {country}</h2>
          <ul>
            {renderedList}
          </ul>
        </div>
        );
};

export default LocationTrends;