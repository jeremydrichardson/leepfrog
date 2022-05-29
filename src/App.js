import { useState } from "react";
import "./App.css";
import { SiteNav } from "./components/SiteNav";
import { useCampuses } from "./hooks/useCampuses";

function App() {
  const [campus, setCampus] = useState("");
  const campuses = useCampuses();

  return (
    <div className="App">
      <select
        name="campus"
        value={campus}
        onChange={(e) => {
          setCampus(e.currentTarget.value);
        }}
      >
        <option value="">Select a campus...</option>
        {campuses.map((campus) => (
          <option value={campus} key={campus}>
            {campus}
          </option>
        ))}
      </select>
      <SiteNav campus={campus} />
    </div>
  );
}

export default App;
