import React from "react";

/*class Weather extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.error}</p>
                {this.props.city &&
                    <div>
                        <p>Местоположение {this.props.city}, {this.props.country}</p>
                        <p>Температура {this.props.temp}</p>
                        <p>Давление {this.props.pressure}</p>
                        <p>Восход солнца {this.props.sunrise}</p>
                        <p>Заход солнца {this.props.sunset}</p>
                    </div>
                }
            </div>
        );
    }
}*/

const Weather = props => (
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
);

export default Weather;