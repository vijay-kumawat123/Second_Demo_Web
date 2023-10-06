import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Header from './components/Header';
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Practice from "./components/Practice";
function App() {
  return (
<Router>
  <Routes>
    <Route path='/header' element={<Header/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/practice' element={<Practice/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>
  </Routes>
</Router>
  );
}

export default App;
