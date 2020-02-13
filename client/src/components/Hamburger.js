import React from 'react';

class Hamburger extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'whiteSmoke',
                    borderRadius: '5px 5px',
                    padding: '5px'
                }}
            >
                <img
                    height="40px"
                    style={{ margin: '0', padding: '0' }}
                    src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png"
                ></img>
            </div>
        );
    }
}

export default Hamburger;
