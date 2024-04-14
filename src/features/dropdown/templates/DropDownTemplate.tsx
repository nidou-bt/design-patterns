import React from "react";
import Dropdown from "../component/DropDown";
import "./style.css";

const items = [
  {
    icon: "",
    text: "item 1",
    description: "desc 1",
  },
  {
    icon: "",
    text: "item 2",
    description: "desc 2",
  },
  {
    icon: "",
    text: "item 3",
    description: "desc 3",
  },
];

const DropDownTemplate = () => {
  return (
    <div>
      DropDown
      <Dropdown items={items} />
    </div>
  );
};

export default DropDownTemplate;
