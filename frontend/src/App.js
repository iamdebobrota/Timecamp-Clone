import './App.css';
import { Dashboard } from './components/pages/Dashboard/Dashboard';
import SideNavbar from './components/pages/SideNav/SideNavbar';
import Router from './components/Routes/Router';
function App() {
  return (
    <div className="App">
      {/* <Router/> */}
      <Dashboard/>
      {/* <SideNavbar/> */}
  </div>
  );
}

export default App;
