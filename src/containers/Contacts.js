import React from 'react';
import {queriedEntity} from 'rest-react-redux'
import PropTypes from "prop-types";
import ContactCard from "components/ContactCard";
import TablePageSetter from "../components/TablePageSetter";
import 'styles/contacts.scss';
import TablePageSizeSetter from "../components/TablePageSizeSetter";

@queriedEntity('contact')
export default class Contacts extends React.Component {

    static propTypes = {
        initialQueryContacts: PropTypes.func, contacts: PropTypes.array,
        contactsQueryParams: PropTypes.object, contactsMetadata: PropTypes.object,
        queryContacts: PropTypes.func, deleteContact: PropTypes.func, history: PropTypes.object
    };

    componentDidMount() {
        this.props.initialQueryContacts('/contacts', {page: 1, pageSize: 10});
    }

    render() {
        return (
            <div className="contacts">
                <h2>Contacts</h2>
                <TablePageSizeSetter
                    onSelectPageSize={pageSize => this.props.queryContacts({pageSize})}
                    selectedPageSize={this.props.contactsQueryParams?.pageSize}
                />
                {this.props.contacts.map(contact => (
                    <ContactCard key={contact.id}
                                 onClick={() => this.props.history.push(`/contacts/${contact.id}`)}
                                 onDelete={() => this.props.deleteContact(contact)}
                                 item={contact}/>
                ))}
                <TablePageSetter
                    selectedPage={this.props.contactsQueryParams?.page}
                    numberOfPages={this.props.contactsMetadata?.totalPages}
                    onSelectPage={page => this.props.queryContacts({page})}
                />
            </div>
        );
    }
}
