import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
