import React from "react";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const DeleteItem = ({
  deleteItem,
  state,
  clearList,
  editItem,
  setState,
  completed,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <ul className="list-group m-5 w-50">
          <h3 className="text-center text-decoration-underline">
            Task Managements
          </h3>

          {state.items[0] ? (
            state.items.map((items) => (
              <li
                className="d-flex justify-content-between text-capitalize"
                key={items.id}
              >
                <div className="title text-capitalize">
                  <h4>{items.item.task}</h4>
                  <h4>{items.item.date}</h4>
                </div>
                {items.completed && (
                  <button className="sucess">completed</button>
                )}
                <div className="icon">
                  <span
                    onClick={() => editItem(items.id)}
                    className="text-warning mx-3"
                  >
                    <FaPen />
                  </span>
                  <span
                    onClick={() => completed(items.id)}
                    className="text-success mx-3"
                  >
                    <IoMdCheckmark />
                  </span>
                  <span
                    onClick={() => deleteItem(items.id)}
                    className="text-danger mx-2"
                  >
                    <FaTrash />
                  </span>
                </div>
              </li>
            ))
          ) : (
            <h1
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              No Tasks in the List
            </h1>
          )}

          <button onClick={clearList} className="btn btn-block btn-danger my-3">
            Clear Tasks
          </button>
        </ul>
      </div>
    </>
  );
};

export default DeleteItem;
