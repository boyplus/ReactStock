import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './style/modalStyle.css';
const Modal = props => {
    console.log(props);
    return ReactDOM.createPortal(
        <div className="myContainer">
            <div
                className="modal"
                onClick={() => {
                    props.onDisMiss();
                }}
            >
                <div
                    className="content"
                    onClick={e => e.stopPropagation()}
                >
                    <div
                        className="closeIcon"
                        onClick={() => {
                            props.onDisMiss();
                        }}
                    >
                        <i className="close large icon closeIcon"></i>
                    </div>

                    <div className="ui large header menuHeader">Menu</div>
                    <div id="listMenu">
                        <Link to="/" className="myMenu border">
                            Home
                        </Link>
                        <Link to="/stocks" className="myMenu border">
                            Stocks
                        </Link>
                        <Link to="/portfolio" className="myMenu">
                            Portfilio
                        </Link>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
