import React from "react";

export default function Empty (props) {

 /*
  * props
  *
  * onAdd: function - will be called when the user adds an item
  */

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main> 
  );
}