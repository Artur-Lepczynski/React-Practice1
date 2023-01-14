import style from "./App.module.css";

import { useState } from "react";

import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import Modal from "./components/Modal";

const dummyData = [{ key: Math.random().toString(), name: "mark", age: 12 }];

function App() {
  const [userList, setUserList] = useState([]);
  const [errorState, setErrorState] = useState(0);

  function setErrorStateHandler(state) {
    setErrorState(state);
  }

  function addUserHandler(user) {
    setUserList((prevState) => {
      return [...prevState, user];
    });
    setErrorState(0);
  }

  function removeUserHandler(id){
    const filtered = userList.filter(item=>{
      return item.key !== id; 
    }); 
    setUserList(filtered); 
  }

  function modalClickHandler() {
    setErrorState(0);
  }

  return (
    <div>
      <hr style={{ border: "none", margin: "0px" }}></hr>
      {errorState !== 0 && (
        <Modal type={errorState} dismissHandler={modalClickHandler} />
      )}
      <AddUser
        errorStateHandler={setErrorStateHandler}
        addUserHandler={addUserHandler}
      />
      {userList.length !== 0 && <UserList users={userList} onRemoveHandler={removeUserHandler} />}
    </div>
  );
}

export default App;
