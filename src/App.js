import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import store from 'store';
import 'styles/test.scss';
import {Login} from "routes/login/Login";
// import load from 'components/load'
import LoadingImage from 'assets/loading.gif';


/**
 * The root react component that encompasses the whole application.
 * This component includes the following wrappers (HOCs) from top to bottom.
 *
 * Provider: provides the redux {@link store} object throughout the application so other components can connect to it.
 * Persist Gate: @todo not implemented yet.
 * Router: the routing library that is responsible for managing rendering appropriate components based on the path.
 * Switch, Route and Redirect: the very first layer of routing configuration for this project.
 *
 * @see https://redux.js.org/
 * @see https://github.com/rt2zz/redux-persist
 * @see https://www.material-ui.com
 * @see https://reacttraining.com/react-router/
 */
class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <img src={LoadingImage}/>
                    <Router>
                        <Switch>
                            <Route exact path="/login" component={Login}/>
                            <Redirect from="*" to="/login" />
                        </Switch>
                    </Router>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);