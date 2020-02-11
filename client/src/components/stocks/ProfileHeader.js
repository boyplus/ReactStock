import React from 'react';

const ProfileHeader = props => {
    return (
        <img
            className="ui rounded image"
            height="35px"
            width="auto"
            style={{ marginRight: '7px' }}
            src={props.imageUrl}
        ></img>
    );
};

export default ProfileHeader;