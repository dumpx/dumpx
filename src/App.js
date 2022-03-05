import { Fragment } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Register from './pages/Register';


function App() {
  return (
    <Fragment>
      <div className="app--display">
        <Sidebar />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/:id' element={<Error />} />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;