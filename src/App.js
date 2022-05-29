import { useState } from "react";
import "./App.css";
import { SiteNav } from "./components/SiteNav";
import { CampusSelect } from "./components/CampusSelect";
import { useCampuses } from "./hooks/useCampuses";

function App() {
  const [currentCampus, setCurrentCampus] = useState("");
  const campuses = useCampuses();

  return (
    <div className="App">
      <CampusSelect
        campuses={campuses}
        currentCampus={currentCampus}
        setCampus={setCurrentCampus}
      />
      <SiteNav campus={currentCampus} />
    </div>
  );
}

export default App;
