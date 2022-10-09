import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://cdn.nba.com/headshots/nba/latest/1040x760/77142.png' />
            Post 1
            <div>
            <span>like</span>
            </div>
        </div>)
}

export default Post