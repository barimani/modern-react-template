import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';


class App extends React.Component {

    render() {
    const property = this.state?.property;
        return (
            <Provider store={store}>
                <div>
                    <div>Application root</div>
                    <div>{property}</div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);