import React from 'react';
import Link from '../Link/Link';
import userService from '../services/user-service';
import './Profile.css';

function ProfileImage(user) {
    return <a href='#'><img src={user.pictureUrl} title={user.username} /></a>;
}

function ProfileCaption(user) {
    return (
        <div className="caption">
            <span className="">{user.fullname}</span>
            <br />
            <span className="">Username: {user.username}</span>
            <br />
            <span>Email: {user.email}</span>
            <br />
            <span>Date of birth: {user.birthdate}</span>
            <br />
            <hr className='divider' />
            <br />
            <span><p>{user.bio}</p></span>
        </div>
    );
}

class Profile extends React.Component {
    
    render() {
    return (
        <div className='container'>
            <ProfileImage  {...this.props.user}/>
            <br />
            <hr className="divider" />
            <ProfileCaption {...this.props.user}/>
        </div>
    );
    }
}

export default Profile;