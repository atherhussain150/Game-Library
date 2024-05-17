import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New Rork", "San Franco", "London", "UK", "The place"];
   
  // const handleClick = (event: MouseEvent) =>  console.log(event);
 
 const [selectIndex, setSelectedIndex] = useState(-1);
 const [selectName, setSelectedName] = useState("default");

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
          className={selectIndex === index 
            ? 'list-group-item active' 
            : 'list-group-item'
          } 
          key={item}
          onClick={() => {
            setSelectedIndex(index);
            setSelectedName(item);
            console.log(selectIndex, selectName);
          }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
