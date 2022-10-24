import React from "react"
import s from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
               Dima
            </div>
            <div className={s.dialog}>
               Khrystyna
            </div>
            <div className={s.dialog}>
               Andrei
            </div>
            <div className={s.dialog}>
               Martin
            </div>
            <div className={s.dialog}>
               Valera
            </div>
            <div className={s.dialog}>
               Honza
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