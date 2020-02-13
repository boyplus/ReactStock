import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './modalStyle.css';
const Modal = props => {
    console.log('test props');
    console.log(props);
    return ReactDOM.createPortal(
        <div className="modal" onClick={() => {console.log('clicked')}}>
            <div className="content">
                <Link to="/">Home</Link>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
