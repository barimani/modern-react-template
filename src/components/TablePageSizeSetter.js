import React from 'react';
import PropTypes from "prop-types";

const values = [5, 10, 15, 20];

const TablePageSizeSetter = props => {
    const {selectedPageSize, onSelectPageSize} = props;
    return (
        <div>
            <select value={selectedPageSize} onChange={e => onSelectPageSize(e.target.value)}>
                {values.map(val => <option key={val} value={val}>{val}</option>)}
            </select>
        </div>
    );
};

TablePageSizeSetter.propTypes = {
    selectedPageSize: PropTypes.number,
    onSelectPageSize: PropTypes.func};

export default TablePageSizeSetter;


