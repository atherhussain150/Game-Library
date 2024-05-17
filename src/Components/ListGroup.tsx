import { useState } from "react";

interface Props {
items: string[];
heading: string;
onSelectItem: (item: string) => void
}

// import { MouseEvent } from "react";
function ListGroup({items, heading, onSelectItem}: Props) {
     
  // const handleClick = (event: MouseEvent) =>  console.log(event);
 
 const [selectIndex, setSelectedIndex] = useState(-1);
 const [selectName, setSelectedName] = useState("default");

  return (
    <>
      <h1>{heading}</h1>
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
            onSelectItem(item)
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
