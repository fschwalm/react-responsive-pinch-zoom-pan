import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const containerStyle = { 
    position: 'absolute', 
    zIndex: 1000,
    left: '80px',
};

const RotateLeft = ({ onClick }) => (
    <button className='iconButton' style={{ margin: '10px' }} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
    </button>
);

const RotateRight = ({ onClick }) => (
    <button className='iconButton' style={{ margin: '10px', marginLeft: '0px' }} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleRight} />
    </button>
);

const RotateButtons = ({onRotateLeftClick, onRotateRightClick}) => (
    <div style={containerStyle} className="rotate-buttons">
        <RotateLeft onClick={onRotateLeftClick} />
        <RotateRight onClick={onRotateRightClick} />
    </div>
);

RotateButtons.propTypes = {
    onRotateLeftClick: PropTypes.func.isRequired,
    onRotateRightClick: PropTypes.func.isRequired,
};

export default RotateButtons;