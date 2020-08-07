import React from 'react';
import PropTypes from 'prop-types';

const LOADER_SIZE = {
    MEDIUM: 'medium',
    BIG: 'big',
};

const Loader = (props) => {
    let { size } = props;
    const { absolute } = props;

    switch (size) {
        case LOADER_SIZE.MEDIUM:
            size = 'consonant-loader_medium';
            break;
        case LOADER_SIZE.BIG:
            size = 'consonant-loader_big';
            break;
        default:
            break;
    }

    return (
        <div className={
            `consonant-loader ${size} ${absolute ? 'consonant-loader_absolute' : ''}`
        }>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Loader;

Loader.propTypes = {
    size: PropTypes.string,
    absolute: PropTypes.bool,
};

Loader.defaultProps = {
    size: '',
    absolute: false,
};
