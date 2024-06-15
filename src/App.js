import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import { useState, useEffect } from "react";

function App() {
  var uniqueId = Math.random() * 100000;

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("state")) || {
      items: [],
      item: "",
      edit: false,
      completed: false,
    }
  );

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = {
      id: uniqueId,
      item: state.item,
      edit: false,
      completed: false,
    };
    const UpdatedItems = [...state.items, newItem];
    setState({
      items: UpdatedItems,
      id: uniqueId,
      item: "",
      edit: false,
      completed: false,
    });
  };
  const handleChangeTask = (e) => {
    setState({
      items: [...state.items],
      item: { ...state.item, task: e.target.value },
    });
  };
  const handleChangeDate = (e) => {
    setState({
      items: [...state.items],
      item: { ...state.item, date: e.target.value },
    });
  };

  const clearList = () => {
    setState({
      items: [],
      item: "",
      edit: false,
    });
  };
  const completed = (id) => {
    const selectedItem = state.items.find((item) => item.id == id);
    const newArray = state.items.filter((item) => item.id !== id);
    const newItem = {
      ...selectedItem,
      completed: true,
    };
    const UpdatedItems = [...newArray, newItem];
    console.log(UpdatedItems, "Completed");
    console.log(selectedItem, "difference", newArray);
    setState({
      items: UpdatedItems,
      item: selectedItem.item,
      edit: false,
      completed: true,
    });
  };

  const deleteItem = (id) => {
    const newArray = state.items.filter((item) => item.id !== id);
    setState({
      items: newArray,
      item: "",
      edit: false,
    });
  };
  const editItem = (id) => {
    const selectedItem = state.items.find((item) => item.id == id);
    const newArray = state.items.filter((item) => item.id !== id);
    setState({
      items: newArray,
      item: selectedItem.item,
      edit: true,
      completed: false,
    });
  };
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return (
    <>
      <div className="mt-5 card card-body">
        <AddItem
          handleAdd={handleAdd}
          handleChangeDate={handleChangeDate}
          handleChangeTask={handleChangeTask}
          state={state}
          setState={setState}
        />
        <DeleteItem
          editItem={editItem}
          deleteItem={deleteItem}
          clearList={clearList}
          state={state}
          setState={setState}
          completed={completed}
        />
      </div>
    </>
  );
}

export default App;
