import React from 'react';
import style from "./Profile.module.css";


type ProfilePropsType = {}

const Profile: React.FC<ProfilePropsType> = () => {
    return <div className={style.wrapper}>
        <h1>Profile</h1>
    </div>
};

export default Profile;