import React from 'react';

const ProfileCard = (props) => {
    return (
        <div className="card">
            <div className="image">
                <img src={props.imageUrl}></img>
            </div>
            <div className="content">
                <div className="header">
                    {props.name}
                </div>
                <div className="meta">
                    <a>{props.email}</a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;