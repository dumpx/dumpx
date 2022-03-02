import { Fragment } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Fragment>
      <div className="app--display">
        <Sidebar />
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
