import classes from './mealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props => {
  const price = `$${props.price.toFixed(2)}` // toFixed(2) ensures that the price is always kept at 2decimalPlaces

  return <li className={classes.meal}>
    <div>
      <h3>{props.title}</h3>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>{price}</p>
    </div>
    <div>
    <MealItemForm id={props.id} />
    </div>
  </li>
}

export default MealItem