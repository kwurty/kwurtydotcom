import './App.css';
import ProjectList from './components/Projects/projectlist';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Hero from './components/Banner/hero';
import Contact from './components/Contact/contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
