import React from "react";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";

const AddItem = ({
  handleAdd,
  state,
  handleChangeDate,
  handleChangeTask,
  setState,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleAdd}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text" id="icon">
              <FaPlus />.
            </div>
          </div>
          <input
            type="text"
            name="item"
            value={state.task}
            onChange={handleChangeTask}
            className=" form-control"
            placeholder="Add Todo Task Item"
            aria-label="Add item"
            aria-describedby="Add item"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text" id="icon">
              <h1>Due date</h1>
            </div>
          </div>
          <input
            type="date"
            name="item"
            value={state.date}
            onChange={handleChangeDate}
            className=" form-control"
            placeholder="Add Todo Task Item"
            aria-label="Add item"
            aria-describedby="Add item"
          />
        </div>
        <button
          type="submit"
          className={
            state.edit
              ? "btn btn-block w-100 btn-success"
              : "btn btn-block w-100 btn-primary"
          }
        >
          {state.edit ? "Edit Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
