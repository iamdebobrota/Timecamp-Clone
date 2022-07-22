import './App.css';
import Features from './components/pages/Features/Features';
import Footer from './components/pages/Footer/Footer';
import { Header } from './components/pages/Header/Header';
import SideNavbar from './components/pages/SideNav/SideNavbar';
import Form from './components/pages/TimeSheet/Calender';

import Timesheet from './components/pages/TimeSheet/Timesheet';
import Router from './components/Routes/Router';
function App() {
  return (
    <div className="App">
      

      {/* <Router/> */}

  



      <SideNavbar/>
<Timesheet/>
{/* <Features/> */}
{/* <Form/> */}
  </div>
  );
}

export default App;
