import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import Main from './containers/Main';
import { StarsCanvas } from './components/canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Copyright from './components/Copyright';

function App() {
  return (
    <BrowserRouter>
      <div className="App relative z-0">
        <NavBar />
        <Banner />
        <Experience />
        <Main />
        <Projects />
        <Certificates />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Copyright />
      </div>
    </BrowserRouter>
  );
}

export default App;
