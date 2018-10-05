import React from 'react';
import {DIALOG_ACTIONS, DIALOG_TYPES} from "../modals/modalConstants";
import confirmModal from '../modals/confirmationModal';
import 'styles/dialog.scss';

/**
 * Generic higher order component: Dialog
 * Decorate your component using this service and use the promise based openDialog property.
 * After resolve it returns a status based on the action taken
 *
 * Implement your common project specific dialogs here to keep your components clean
 */
export default WrappedComponent => class DialogService extends React.Component {

    /** @ignore */
    state = {open: false, type: null};

    /**
     * This is the property passed to the wrapped component
     *  */
    openDialog = (dialog = {}) => {
        this.setState({open: true, ...dialog});
        return new Promise((callback) => {
            this.setState({callback});
        });
    };

    /**
     *  Closes and dispatched an action
     */
    dispatchAction = (actionType, payload) => {
        const callback = this.state.callback;
        callback && callback({actionType, payload});
        this.setState({open: false, type: null, callback: null});
    };

    /**
     *  Simple switch case for rendering the required dialog
     *  Default is warning dialog
     */
    getModalClass = () => {
        switch (this.state.type) {
            case DIALOG_TYPES.CONFIRM: return confirmModal(this.state.config);
            default: return null;
        }
    };

    /** @ignore */
    render() {
        const ModalClass = this.getModalClass();
        return (
            <div>
                <WrappedComponent {...this.props} openDialog={this.openDialog}/>
                {ModalClass && <div className="dialog"><ModalClass
                    open={this.state.open}
                    onClose={() => this.dispatchAction(DIALOG_ACTIONS.CLOSED)}
                    dispatchAction={this.dispatchAction}
                /></div>}
            </div>
        )
    }
}
