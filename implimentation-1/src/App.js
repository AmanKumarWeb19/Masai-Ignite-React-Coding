import TextAreaCount from "./components/10-character-Count/TextAreaCount";
import Mesg_Parent from "./components/4-Message/Mesg_Parent";
import Fetch_Api from "./components/5-Fetch-Api/Fetch_Api";
import SearchQueryApi from "./components/6-SearchQuery/SearchQueryApi";
import Timer from "./components/7-Timer/Timer";
import PeriodicallyUpdateTimer from "./components/8-Periodically-Update/PeriodicallyUpdateTimer";
import DecrementTimer from "./components/9-Decrement-Timer/DecrementTimer";
import Parent_Component from "./components/Counter-3/Parent_Component";
import ToggleButton from "./components/Toogle/ToggleButton";
import Parent_Dark_light from "./components/Upliftment-2/Parent_Dark_light";

function App() {
  return (
    <div className="App">
      <div>
        {/* <ToggleButton /> */}
        {/* <Parent_Dark_light />  */}
        {/* <Parent_Component /> */}
        {/* <Mesg_Parent /> */}
        {/* <Fetch_Api /> */}
        {/* <SearchQueryApi /> */}
        {/* <Timer/> */}
        {/* <PeriodicallyUpdateTimer/> */}
        <DecrementTimer />
        {/* <TextAreaCount /> */}
      </div>
    </div>
  );
}

export default App;
