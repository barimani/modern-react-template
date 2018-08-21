import React from "react";
import PropTypes from "prop-types";

const ContactCard = props => {
    return (
        <div className="contact-card">
            <div>name: <b>{props.item?.name}</b></div>
            <div>phoneNumber: <b>{props.item?.phoneNumber}</b></div>
            <button onClick={props.onDelete}>delete</button>
            <button onClick={props.onClick}>details</button>
        </div>
    )
};

ContactCard.propTypes = {item: PropTypes.object.isRequired, onDelete: PropTypes.func, onClick: PropTypes.func};

export default ContactCard;