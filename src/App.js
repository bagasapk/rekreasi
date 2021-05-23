import './App.css';
import { CarouselData } from './components/CarouselData';
import CarouselImg from './components/CarouselImg';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar />
        <CarouselImg slides={CarouselData}/>
    </div>
  );
}

export default App;
