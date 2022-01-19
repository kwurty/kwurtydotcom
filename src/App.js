import logo from './logo.svg';
import './App.css';
import ProjectList from './components/projectlist';
import Nav from './components/nav';
import About from './components/about';

function App() {
  return (
    <div className="App bg-dark-gray">
      <Nav />
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
