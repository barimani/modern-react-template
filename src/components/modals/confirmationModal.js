import React from 'react';
import ModalContainer from "./ModalContainer";
import {DIALOG_ACTIONS} from "./modalConstants";
import Button from "@material-ui/core/Button/Button";

export default ({title = 'No title', confirmText= 'confirm'} = {}) =>
    class ConfirmationModal extends ModalContainer {
    render() {
        return super.renderModal(
            <div>
                <div style={{marginTop: 126}}>
                    <Button onClick={this.props.onClose} style={{width: 152, color: '#8a8e95'}}>
                        Cancel
                    </Button>
                    <Button onClick={() => this.props.dispatchAction(DIALOG_ACTIONS.CONFIRMED)}
                            style={{float: 'right', color: '#f12523'}}>
                        {confirmText}
                    </Button>
                </div>
            </div>
        , title)
    }
}