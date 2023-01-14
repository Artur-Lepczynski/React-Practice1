import style from "./AddUser.module.css";

import { useState } from "react";

export default function AddUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!name && !age) {
      props.errorStateHandler(1);
      return;
    }else if(!name){
      props.errorStateHandler(2);
      return; 
    } else if (age <= 0) {
      props.errorStateHandler(3);
      return;
    }

    const newUser = {
      key: Math.random().toString(), 
      name, 
      age,
    };
    props.addUserHandler(newUser);
    setName(""); 
    setAge(""); 

  }
  return (
    <div className={style["add-user-wrapper"]}>
      <form className={style["add-user-form"]} onSubmit={submitHandler}>
        <label htmlFor="username-input">Username</label>
        <input
          name="name"
          id="username-input"
          type="text"
          value={name}
          onChange={nameChangeHandler}
        ></input>
        <label htmlFor="age-input">Age (Years)</label>
        <input
          name="age"
          id="age-input"
          type="number"
          value={age}
          onChange={ageChangeHandler}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
