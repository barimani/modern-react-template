import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';

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