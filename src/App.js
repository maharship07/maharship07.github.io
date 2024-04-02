// This is the main react file
import Navbar from './components/NavBar/navbar';
import Socials from './components/Socials/social';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Works from './components/Work/works'
import Contact from './components/Contact/contact';
import MobSocials from './components/Socials/mobsocial';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <Socials/>
      <MobSocials/>
    </div>
  );
}

export default App;
