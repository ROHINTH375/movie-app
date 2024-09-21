import {BrowserRouter as Router, Route , Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Moviepage from "./pages/Moviepage";
import './styles/styles.css';




function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" Component = {HomePage} />
      <Route path="/movies/:id" Component = {Moviepage} />
    </Routes>
   </Router>
  );
}

export default App;
