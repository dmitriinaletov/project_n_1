import React from "react"
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
               <NavLink to='/dialogs/1' className={navData => navData.isActive ? s.active : s.item}>Dima</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/2' className={navData => navData.isActive ? s.active : s.item}>Khrystyna</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/3' className={navData => navData.isActive ? s.active : s.item}>Andrei</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/4' className={navData => navData.isActive ? s.active : s.item}>Martin</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/5' className={navData => navData.isActive ? s.active : s.item}>Valera</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/6' className={navData => navData.isActive ? s.active : s.item}>Honza</NavLink>
            </div>
         </div>
         <div className={s.messeges}>
            <div className={s.messege}>Hi</div>
            <div className={s.messege}>How are you?</div>
            <div className={s.messege}>I am fine</div>
         </div>
      </div >
   )
}

export default Dialogs;