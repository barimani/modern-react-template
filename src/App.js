import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';


class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <div>Application root</div>
                    <div>{this.state?.property}</div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);