import style from "./Modal.module.css";

export default function Modal(props) {

  let  errorText = ""; 
  if(props.type === 1){
    errorText = "enter valid name and age";
  }else if(props.type === 2){
    errorText = "enter valid name"; 
  }else if(props.type === 3){
    errorText = "enter valid age, >0";
  }

  return (
    <div className={style["modal-wrapper"]}>
      <div className={style["modal-window"]}>
        <p id={style["modal-header"]}>Invalid Input</p>
        <p id={style["modal-text"]}>
          {errorText}
        </p>
        <button type="button" onClick={props.dismissHandler}>Okay</button>
      </div>
    </div>
  );
}
