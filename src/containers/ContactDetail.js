import React from 'react';
import {detailedEntity} from 'rest-react-redux'
import PropTypes from "prop-types";
// import 'styles/contacts.scss';

@detailedEntity('contact')
export default class ContactDetail extends React.Component {

    static propTypes = {
        initialGetContact: PropTypes.func, contact: PropTypes.object,
        deleteContact: PropTypes.func, match: PropTypes.object, history: PropTypes.object
    };

    componentDidMount() {
        const {contactId} = this.props.match.params;
        this.props.initialGetContact(`/contacts/${contactId}`, contactId);
    }

    deleteContact = () => this.props.deleteContact().then(() => this.props.history.push('/contacts'));


    render() {
        return (
            <div className="contacts">
                <h2>Contact Detail</h2>
                <div>name: <b>{this.props.contact?.name}</b></div>

                <br/>

                <div>phone number: <b>{this.props.contact?.phoneNumber}</b></div>

                <br/>

                <button onClick={this.deleteContact}>delete contact</button>
            </div>
        );
    }
}
