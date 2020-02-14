import React from 'react';

const ProfileHeader = props => {
    return (
        <img
            className="ui circular image"
            height="35px"
            width="auto"
            style={{ marginRight: '7px' }}
            src={props.imageUrl}
            alt="user"
        ></img>
    );
};

export default ProfileHeader;
