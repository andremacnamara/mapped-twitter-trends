import styled from 'styled-components';

const LocationTrendsBox = styled.div`
    position: absolute;
    top: 80px;
    right: 50px;
    width: 400px;
    min-height: 200px;
    padding: 0 20px 20px 20px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    font-size: 18px;
    color: #fff;

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 5px 0;
    }

    h2 {
        margin-top: 15px;
        margin-bottom: 15px;
    }
`;

export default LocationTrendsBox;