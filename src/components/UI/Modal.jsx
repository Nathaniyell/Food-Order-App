import React from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props=>{
  return <div className={styles.backdrop}></div>
}
const ModalOverlay = props=>{
  return <div className={styles.modal}>
  <div className={styles.conent}>
    {props.children}
  </div>
  </div>
 
}

const portalLocation = document.getElementById('overlays')
const Modal =(props)=>{
  return(
    <>
      {ReactDOM.createPortal(<Backdrop />, portalLocation)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
    </>
  )
}

export default Modal