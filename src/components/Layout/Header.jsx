import React from 'react'
import meals from '../../assets/meals.jpg'
import headerStyles from './header.module.css'
import HeaderCartBtn from './HeaderCartBtn'


const Header = props =>{
  return <>
    <header className={headerStyles.header} >
    <h1>React Meals</h1>
      <HeaderCartBtn onClick={props.onClickCart} />
    </header>
    <div className={headerStyles['main-image']} >
    <img src={meals} alt='A table of meals' />
    </div>
  </>
}

export default Header