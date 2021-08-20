import React from "react";

class Time extends React.Component {
    timeNow = new Date()/*.toLocaleDateString();*/
    render() {
        return (
            <div>
                <div>{this.timeNow.getHours() + ":" + this.timeNow.getMinutes()}</div>
                <div></div>

            </div>
        );
    };
}

/*class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    render() {
        return (
            <div>
                <div>{this.state.time.getHours() + ":" + this.state.time.getMinutes()}</div>
                <div></div>
            </div>

        );
    }
}*/

export default Time;