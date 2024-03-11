import { Route, Routes } from "react-router-dom";
import "./App.css";
import BgImage from "./Components/BgImage";
import cardBack from "./images/bg-card-back.png";
import cardFront from "./images/bg-card-front.png";
import SuccesScreen from "./Components/SuccesScreen";

function App() {
  return (
    <div className="App">
     <BgImage imageOne={cardBack} imageTwo={cardFront}/>
     <Routes>
      <Route path='/SuccesScreen' element={<SuccesScreen/>}/>
     </Routes>
    </div>
  );
}

export default App;
