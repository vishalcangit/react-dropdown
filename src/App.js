import { useState } from "react";

function App() {
  // this is the array of objects containing all the options for dropdown with the labels and values 
  const options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'Probably Not' }
  ];
  // destructuring is used to set value with the help of useState hook
  const [value, setValue] = useState('');

  // onChange is handled here as the dropdown item is selected the value of dropdown changes 
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="dropdown">
      {/* header of dropdown */}
      <h1>
        Should you use a dropdown?
      </h1>
      {/* dropdown */}
      <select onChange={handleChange} value={value}>
        {/* dropdown default selected value */}
        <option value="" disabled selected>Select</option>
        {/* this will map to all the values i option array and present */}
        {options.map((option) => (
          // this will show the value from the props to display in webpage
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
export default App;