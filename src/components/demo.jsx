import React, { useState } from 'react';
// import './Switches.css'; // Import your CSS file

const Switch = ({ id, label, isChecked, onChange }) => {
  return (
    <label className="switch">
      <input
        type="radio"
        name="toggle"
        checked={isChecked}
        onChange={() => onChange(id)}
      />
      <span className="slider"></span>
      {label}
    </label>
  );
};

const Switches = () => {
  const [selectedSwitch, setSelectedSwitch] = useState(null); // Initial selected switch

  const switches = [
    { id: 1, label: 'Switch 1' },
    { id: 2, label: 'Switch 2' },
    // Add more switches as needed
  ];

  const handleSwitchChange = (id) => {
    setSelectedSwitch(id === selectedSwitch ? null : id);
  };

  return (
    <div className="switch-container">
      {switches.map((switchItem) => (
        <Switch
          key={switchItem.id}
          id={switchItem.id}
          label={switchItem.label}
          isChecked={selectedSwitch === switchItem.id}
          onChange={handleSwitchChange}
        />
      ))}
    </div>
  );
};

export default Switches;
