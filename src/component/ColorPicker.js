import React, { useState } from 'react';

const ColorPicker = ({ defaultColor }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor || '#000000');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    // You can add additional logic here if needed
  };

  return (
    <div>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => handleColorChange(e.target.value)}
      />
     
    </div>
  );
};

export default ColorPicker;
