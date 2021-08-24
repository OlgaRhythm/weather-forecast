import React from "react";

class Info extends React.Component {
    word = ['Приветствуем Вас в приложении', 'Welcome to the application', 'Willkommen bei der Anwendung']
    render() {
        return (
            <div >
                <h1>{this.word[this.props.language]}</h1>
            </div>
        );
    }
}

/*const Info = () => (
    <div>
        <h1>Приветствуем Вас в приложении</h1>
    </div>
);*/

export default Info;