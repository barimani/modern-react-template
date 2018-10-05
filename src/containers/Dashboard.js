import React from 'react';
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import 'styles/dashboard.scss';
import dialogService from "components/HOC/dialogService";
import {DIALOG_TYPES} from "../components/modals/modalConstants";

@dialogService
export default class Dashboard extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        openDialog: PropTypes.func
    };

    state = {};

    openDialog = () => {
        this.props.openDialog({type: DIALOG_TYPES.CONFIRM, config: {title: 'Are you sure?'}}).then(dialogResponse => {
            this.setState({dialogResponse});
        })
    };

    render() {
        return (
            <div className="dashboard">
                <h3>Dashboard</h3>
                <Button variant="outlined" onClick={() => this.props.history.push('/contacts')}>Contacts</Button>
                <br/>
                <Button variant="outlined" onClick={this.openDialog}>Open modal</Button>
                <br/>
                {this.state.dialogResponse?.actionType}
            </div>
        );
    }
}
