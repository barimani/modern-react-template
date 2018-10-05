import React from 'react';
import { Dialog, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";
const closeIconStyle = {position: 'absolute', right: -45, top: -25};

export default class ModalContainer extends React.Component {

    static propTypes = {open: PropTypes.bool, onClose: PropTypes.func};
    static defaultProps = {open: false};

    renderModal(content, title) {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                classes={{paper: 'dialog'}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div style={{position: 'relative'}}>
                    {title && <div className="dialog-title">{title}</div>}
                    <IconButton style={closeIconStyle} onClick={this.props.onClose}>
                        <CloseIcon/>
                    </IconButton>
                    {content}
                </div>
            </Dialog>
        );
    }
}