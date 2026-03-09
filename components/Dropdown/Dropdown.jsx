import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Dropdown.css";

const Dropdown = ({ options, label, onSelect }) => {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="dropdown">

      <div className="inputBox dropdown-input" onClick={() => setOpen(!open)}>
        <span>{selected || label}</span>
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      {open && (
        <ul className="dropdown-menu">
          {options.map((opt, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
                onSelect?.(opt);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Dropdown;