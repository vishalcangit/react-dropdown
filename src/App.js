import { useState } from "react";

function App() {

  const options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'Probably Not' }
  ];

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="dropdown">
      <h1>
        Should you use a dropdown?
      </h1>
      <select onChange={handleChange} value={value}>
        <option value="" disabled selected>Select</option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
export default App;