import Modal from '../UI/Modal'
import classes from './cart.module.css'

const Cart = props => {
  const cartItems = <ul className={classes['cart-item']}>
    {[{ id: 'c1', name: "sushi", amount: 2, price: '30.00' }].map(item => {
      return <li>{item.name}</li>
    })}
  </ul>

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total AMount</span>
        <span>35.25<span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </Modal>
      )
  
}

    export default Cart