import React from 'react';
import PropTypes from "prop-types";

const TablePageSetter =  props => {
    const {selectedPage, numberOfPages, onSelectPage} = props;
    if (!numberOfPages || numberOfPages <= 1) return null;
    return (
        <div className="table-page-setter">
            <span className={selectedPage === 1 ? 'disabled' : ''}
               onClick={() => {if (selectedPage === 1) return; onSelectPage(selectedPage - 1);}}>{'<'} Back</span>
            {
                Array.from(Array(numberOfPages + 1).keys()).map(page => {
                    if (!page) return null;
                    return <span key={page} className={selectedPage === page ? 'selected' : ''} onClick={() => onSelectPage(page)}>{page}</span>
                })
            }
            <span className={selectedPage === numberOfPages ? 'disabled' : ''}
               onClick={() => {if (selectedPage === numberOfPages) return; onSelectPage(selectedPage + 1);}}>Next {'>'}</span>
        </div>
    );
};

TablePageSetter.propTypes = {
    selectedPage: PropTypes.number,
    numberOfPages: PropTypes.number,
    onSelectPage: PropTypes.func};

export default TablePageSetter;


