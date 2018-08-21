import React from 'react';
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import 'styles/dashboard.scss';

export default class Dashboard extends React.Component {

    static propTypes = {history: PropTypes.object.isRequired};

    render() {
        return (
            <div className="dashboard">
                <h3>Dashboard</h3>
                <Button variant="outlined" onClick={() => this.props.history.push('/contacts')}>Contacts</Button>
            </div>
        );
    }
}
