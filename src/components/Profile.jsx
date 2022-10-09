import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className = {s.content}>
        <div>
            <img src='https://images.stockx.com/images/Air-Jordan-23-All-Star-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&trim=color&dpr=2&updated_at=1611930726&q=75' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className = {s.posts}>
                <div className = {s.item}>
                Post 1
                </div>
                <div className = 'item'>
                Post 2
                </div>
        </div>
    </div>
</div>;
}

export default Profile