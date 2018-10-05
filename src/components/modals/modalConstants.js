/**
 *  The type of the dialog
 * */
export const DIALOG_TYPES = {
    CONFIRM: 'CONFIRM',
};

/**
 *  The type of the action taken by the user
 */
export const DIALOG_ACTIONS = {

    /** Used for warning and confirmation dialogs**/
    CONFIRMED: 'CONFIRMED',
    CLOSED: 'CLOSED',

    /** Used for form dialogs **/
    CANCELLED: 'CANCELLED',
    SUCCESSFUL_SUBMISSION: 'SUCCESSFUL_SUBMISSION'
};
