import classes from './availableMeals.module.css'
import Dummy from './dummy-meals'

export default function AvailableMeals(){
  const mealsList = Dummy.map(meal => {
    <li key={meal.id}>{meal.name}</li>
  })

  return <section className={classes.meals}>
    <ul>
      {mealsList}
    </ul>
  </section>
}
