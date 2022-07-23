import './App.css';
import { Project } from './components/pages/ProjectPage/Project';
import SideNavbar from './components/pages/SideNav/SideNavbar';
import Router from './components/Routes/Router';
function App() {
  return (
    <div className="App">
      {/* <Router/> */}
      <Project/>
      {/* <SideNavbar/> */}
  </div>
  );
}

export default App;
