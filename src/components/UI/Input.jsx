import classes from './input.module.css'

const Input = props =>{
  return <div className={classes.input}>
  <label htmlFor={props.input.id}>{props.label} </label>
    <input {...props.input} //this ensures that all the keyValue pairs we recieve are added to the input itself and can be accessed and used
      />
  </div>
}

export default Input