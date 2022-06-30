
function App() {
  return (
    <div className="dropdown">
      <h1>
        Should you use a dropdown?
      </h1>
      <select>
        <option value="" disabled selected>Select</option>
        <option value="yes">Yes</option>
        <option value="no" >Probably Not</option>
      </select>
    </div>
  );
}

export default App;
