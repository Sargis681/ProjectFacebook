import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import NavbarTwo from './components/NavbarTwo/NavbarTwo';
import Nbot from './components/Nbot/Nbot';
import ProfileName from './components/ProfileName/ProfileName';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Nbot/>
      <ProfileName/>
      <NavbarTwo/>
      <Content/>

            
      
    
    </div>
  );
}

export default App;
