import {Routes,  Route } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login'
import Users from './components/pages/ProjectUsers/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/auth/register" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/app/settings/users" element={<Users />} />
      </Routes>
      {/* <Routes/> */}
  </div>
  );
}

export default App;
