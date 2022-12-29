import classes from './availableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Dummy from './dummy-meals'
import Card from '../UI/Card'


export default function AvailableMeals() {
  const mealsList = Dummy.map(meal => {
    return <MealItem
      key={meal.id}
      title={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  })

  return <section className={classes.meals}>
    <Card>
      <ul>
        {mealsList}
      </ul>
    </Card>
  </section>
}
