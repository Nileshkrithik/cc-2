



import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Singer from './components/singer';
import Album from './components/Albumn';
import NavBar from './components/Navbar';
import Day6 from "./components/Day6";
import Day7 from "./components/Day7";
import Day81 from "./components/Day8";










function App() {
  return (
    <div className="App">
    <Day6/>
    <Day7/>
    <Day81/>
    
   
    
  
    <div id="new">
    <NavBar/>
         <Routes>
             <Route exact path='/' element={<Home />}></Route>
             <Route path='/singer' element={<Singer />}></Route>
             <Route path='/Album' element={<Album />}></Route>
         </Routes>
    </div>
    </div>
 
  
    
   
    
   
  );
}

export default App;

