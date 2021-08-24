import React from "react";

class LanguageButton extends React.Component {
    lbm0 = event => {
        this.props.languageButtonMethody(0);
    };

    lbm1 = event => {
        this.props.languageButtonMethody(1);
    };

    lbm2 = event => {
        this.props.languageButtonMethody(2);
    };

    render() {
        return (
            <div>

                <button onClick={this.lbm0} className="languageBtn">Рус</button>
                <button onClick={this.lbm1} className="languageBtn">Eng</button>
                <button onClick={this.lbm2} className="languageBtn">Deu</button>
            </div>
        );
    };
    /*<button onClick={this.props.languageButtonMethod(0)} className="languageBtn">Рус</button>
    <button onClick={this.props.languageButtonMethod(1)} className="languageBtn">Eng</button>
    <button onClick={this.props.languageButtonMethod(2)}  className="languageBtn">Deu</button>*/
}

export default LanguageButton;