import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/randomcolor';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
    {/* <Accordian/> */}
    {/* random color componenet */}
    {/* <RandomColor/> */}
    {/* Star rating component */}
    <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
