import Mesg_Parent from "./components/4-Message/Mesg_Parent";
import Fetch_Api from "./components/5-Fetch-Api/Fetch_Api";
import SearchQueryApi from "./components/6-SearchQuery/SearchQueryApi";
import Parent_Component from "./components/Counter-3/Parent_Component";
import ToggleButton from "./components/Toogle/ToggleButton";
import Parent_Dark_light from "./components/Upliftment-2/Parent_Dark_light";

function App() {
  return (
    <div className="App">
      <div>
        {/* <ToggleButton />
        <Parent_Dark_light /> */}
        {/* <Parent_Component /> */}
        {/* <Mesg_Parent /> */}
        {/* <Fetch_Api /> */}
        <SearchQueryApi />
      </div>
    </div>
  );
}

export default App;
