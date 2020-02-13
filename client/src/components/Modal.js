import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './modalStyle.css';
const Modal = props => {
    return ReactDOM.createPortal(
        <div
            className="modal"
            onClick={() => {
                props.onDisMiss();
            }}
        >
            <div className="content" onClick={e => e.stopPropagation()}>
                <Link to="/">Home</Link>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
