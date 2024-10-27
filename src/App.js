import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/randomcolor";
import StarRating from "./components/star-rating";
import Imageslider from "./components/imageslider/Imageslider";
import Loadmore from "./components/loadmore/Loadmore";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* random color componenet */}
      {/* <RandomColor/> */}
      {/* Star rating component */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <Imageslider url={"https://picsum.photos/v2/list"} 
      page={"1"}
     limit={40} /> */}
     <Loadmore/>
    </div>
  );
}

export default App;
