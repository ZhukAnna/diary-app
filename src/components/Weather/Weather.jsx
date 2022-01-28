import React, {Component} from 'react';
import './Weather.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const styles = {
    colorDynamic: (temp) => {
        switch (temp) {
            case (temp >= 25):
                return {color: '#FF4944'};
            case (temp >= 10):
                return {color: '#FF9F44'};
            case (temp >= 0):
                return {color: '#C9F341'};
            case (temp < -10):
                return {color: '#4C41B1'};
            case (temp < -20):
                return {color: '#7936AC'};
            default:
                return {color: '#2DA785'};
          }
    }
}

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            country: undefined,
            temp: 0,
            wind: 0,
            icon: '',
            text: ''
        };
    }

    componentDidMount() {  
        this.weatherData();
    }

    weatherData = () => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip&aqi=no`)
        .then(response => response.json())
        .then(data => {
                this.setState({
                    city: data.location.name,
                    country: data.location.country,
                    temp: data.current.temp_c,
                    wind: data.current.wind_mph,
                    icon: data.current.condition.icon,
                    text: data.current.condition.text
                });
            })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }  

    render({city, country, temp, wind, icon,text} = this.state) {
        return (
            <div className="weather">
                <div className="weather__row">
                    <div className="weather__temp"style={styles.colorDynamic(temp)}><span>{temp}</span>°C</div>
                    <div className="weather__icon">
                        <img src={icon} alt={text} />
                    </div>
                </div>
                <div className="weather__row">
                    <div className="weather__wind">wind: {wind} mph </div>
                    <div className="weather__location">{city}, {country}</div>
                </div>
            </div>
        )
    }
}