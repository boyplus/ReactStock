import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './style/modalStyle.css';
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test: 'activeContent' };
    }
    render() {
        return ReactDOM.createPortal(
            <div className="myContainer">
                <div
                    className="modal"
                    onClick={() => {
                        this.setState({ test: 'unactiveContent' });
                        this.props.onDisMiss();
                    }}
                >
                    <div
                        className={`content ${this.state.test}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div
                            className="closeIcon"
                            onClick={() => {
                                this.setState({ test: 'unactiveContent' });
                                this.props.onDisMiss();
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
    }
}

export default Modal;
