import React from "react"
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

   let path = '/dialogs/' + props.id;
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {

   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name='Dima' id='1' />
            <DialogItem name='Khrystyna' id='2' />
            <DialogItem name='Andrei' id='3' />
            <DialogItem name='Martin' id='4' />
            <DialogItem name='Valera' id='5' />
            <DialogItem name='Honza' id='6' />
         </div>
         <div className={s.messages}>
            <Message message='Hi' />
            <Message message='How are you?' />
            <Message message='I am fine' />
         </div>
      </div >
   )
}

export default Dialogs;