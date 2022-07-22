import './App.css';
import SideNavbar from './components/pages/SideNav/SideNavbar';
import Timesheet from './components/pages/TimeSheet/Timesheet';
import Router from './components/Routes/Router';
function App() {
  return (
    <div className="App">
      {/* <Router/> */}
      <SideNavbar/>
<Timesheet/>

  </div>
  );
}

export default App;
