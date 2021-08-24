import React from "react";

class Weather extends React.Component {
    /*русский, english, deutsch*/
    langCityCountry = ['Местоположение ', 'Location ', 'Lage '];
    langTempure = ['Температура ', 'Temperature ', 'Temperatur ']
    langPressure = ['Давление ', 'Pressure ', 'Druck '];
    langSunrise = ['Рассвет ', 'Sunrise ', 'Dämmerung '];
    langSunset = ['Закат ', 'Sunset ', 'Sonnenuntergangs '];
    render() {
        return (
            <div>
                <p>{this.props.error}</p>
                {this.props.city &&
                    <div>
                        <div>{this.langCityCountry[this.props.language]} {this.props.city}, {this.props.country}</div>
                        <div>{this.langTempure[this.props.language]} {this.props.temp}</div>
                        <div>{this.langPressure[this.props.language]} {this.props.pressure}</div>
                        <div>{this.langSunrise[this.props.language]} {this.props.sunrise}</div>
                        <div>{this.langSunset[this.props.language]} {this.props.sunset}</div>
                    </div>
                }
            </div>
        );
    }
}

/*const Weather = props => (
    <div>
        <p>{props.error}</p>
        {props.city &&
            <div>
                <div>Местоположение {props.city}, {props.country}</div>
                <div>Температура {props.temp}</div>
                <div>Давление {props.pressure}</div>
                <div>Восход солнца {props.sunrise}</div>
                <div>Заход солнца {props.sunset}</div>
            </div>
        }
    </div>
);*/

export default Weather;