import style from "./ListItem.module.css";

export default function ListItem(props) { 

  function removeUserHandler(){
    props.onRemoveHandler(props.id); 
  }

  return (
    <p className={style.item} onClick={removeUserHandler}>
      {props.name + " (" + props.age + " years old)"}
    </p>
  );
}
