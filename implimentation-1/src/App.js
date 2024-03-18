import Router from "./components/14-React-Router/Routes";
import TextAreaCount from "./components/10-character-Count/TextAreaCount";
import Axios_Parent from "./components/11-Axios/Axios_Parent";
import Card_Parent from "./components/12-Card/Card-Parent";
import Form from "./components/14-React-Router/Form";
import Mesg_Parent from "./components/4-Message/Mesg_Parent";
import Fetch_Api from "./components/5-Fetch-Api/Fetch_Api";
import SearchQueryApi from "./components/6-SearchQuery/SearchQueryApi";
import Timer from "./components/7-Timer/Timer";
import PeriodicallyUpdateTimer from "./components/8-Periodically-Update/PeriodicallyUpdateTimer";
import DecrementTimer from "./components/9-Decrement-Timer/DecrementTimer";
import Parent_Component from "./components/Counter-3/Parent_Component";
import Counter_Timer_UseRef from "./components/React_counter_timer_useref/Counter_Timer-UseRef";
import ToggleButton from "./components/Toogle/ToggleButton";
import Parent_Dark_light from "./components/Upliftment-2/Parent_Dark_light";
import Routes404 from "./components/15-Display-Route/Routes404";
import Reciepe from "./components/16-Reciepe/Reciepe";
import Trivia_Question from "./components/17-Trivia/Trivia_Question";
import Login from "./components/21-Login/Login";

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
        {/* <DecrementTimer /> */}
        {/* <TextAreaCount /> */}
        {/* <Axios_Parent /> */}
        {/* <Card_Parent /> */}
        {/* <Counter_Timer_UseRef /> */}
        {/* <Router /> */}
        {/* <Routes404 /> */}
        {/* <Reciepe /> */}
        {/* <Trivia_Question /> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
