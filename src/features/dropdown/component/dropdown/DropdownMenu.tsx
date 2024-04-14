import React from "react";

import { Item } from "../../types";

const DropdownMenu = ({
  items,
  onItemClick,
  selectedIndex,
}: {
  items: Item[];
  onItemClick: (item: Item) => void;
  selectedIndex: number;
}) => {
  return (
    <div className="dropdown-menu" role="listbox">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemClick(item)}
          className="item-container"
        >
          <img src={item.icon} alt={item.text} />
          <div className="item-details">
            <div>{item.text}</div>
            <small>{item.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
