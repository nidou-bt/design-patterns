import { useState } from "react";
import Trigger from "./dropdown/Trigger";
import { Item } from "../types";
import DropdownMenu from "./dropdown/DropdownMenu";

type DropdownProps = {
  items: Item[];
};

const Dropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (
      e.key
      // ... case blocks ...
      // ... handling Enter, Space, ArrowDown and ArrowUp ...
    ) {
    }
  };

  return (
    <div className="dropdown">
      <Trigger
        label={selectedItem ? selectedItem.text : "Select an item..."}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DropdownMenu
          items={items}
          onItemClick={setSelectedItem}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default Dropdown;
