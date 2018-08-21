import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import load from 'components/load'
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';
import {insertToken} from './actions/auth';
import configureAxios from 'config/axios/axios.config';
import 'styles/test.scss';

configureAxios();
const cookies = new Cookies();

const mapStateToProps = state => ({token: state.auth?.token});
const mapDispatchToProps = {insertToken};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {

    static propTypes = {token: PropTypes.string, insertToken: PropTypes.func};

    componentDidMount() {
        const token = cookies.get('token');
        this.props.insertToken(token || null);
    }


    wrap = (Component, protect = false) => {
        const {token} = this.props;
        if (token === undefined) return () => <div>Loading...</div>;
        else if (protect && token === null) return () => <Redirect to="/login"/>;
        else if (!protect && token) return () => <Redirect to="/dashboard"/>;
        else return () => <Component/>
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" render={this.wrap(load('containers/Login.js'), false)}/>
                    <Route path="/dashboard" render={this.wrap(load('containers/Dashboard'), true)}/>
                    <Redirect from="*" to="/login" />
                </Switch>
            </Router>
        )
    }
}

