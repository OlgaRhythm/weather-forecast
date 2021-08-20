import React from "react";

class LanguageButton extends React.Component {
    render() {
        return (
            <div>
                <button onClick>Рус</button>
                <button onClick>Eng</button>
                <button onClick>Deu</button>
            </div>
        );
    };
}

export default LanguageButton;