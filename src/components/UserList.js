import ListItem from "./ListItem";
import style from "./UserList.module.css";

export default function UserList(props) {
  return (
    <div className={style.list}>
      {props.users.map((item) => (
        <ListItem key={item.key} name={item.name} age={item.age} id={item.key} onRemoveHandler={props.onRemoveHandler} />
      ))}
    </div>
  );
}
