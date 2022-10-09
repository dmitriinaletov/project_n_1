import React from 'react';
import s from './Navbar.module.css';
console.log(s);

// let s = {
//    'nav': 'Navbar_nav__wXPlc',
//    'item': 'Navbar_item__DpmYn'
//    'active': 'Navbar_active__something'
// }

let c1 = 'item';
let c2 = 'active';
// 'item active'
let classes = c1 + ' ' + c2;
let classesNew = `${s.item} ${c2}`;

const Navbar = () => {
   return <nav className = {s.nav}>
      <div className = {s.item}>
         <a>Profile</a>
      </div>
      <div className = {`${s.item} ${s.active}`}>
         <a>Masseges</a>
      </div>
      <div className = {s.item}>
         <a>News</a>
      </div>
      <div className = {s.item}>
         <a>Music</a>
      </div>
      <div className = {s.item}>
         <a>Settings</a>
      </div>
   </nav>;
}



export default Navbar