import React from "react";


class Form extends React.Component {
    word = ['Получить погоду', 'Get weather', 'Wetter bekommen'];
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город" />
                <button>{this.word[this.props.language]}</button>
            </form>
        );
    };
}

/*const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Город" />
        <button>Получить погоду</button>
    </form>
);*/

export default Form;