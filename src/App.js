import logo from './logo.svg';
import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header data-cy="header" className="App-header">
        <img data-cy="logo" src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/hello"
          data-cy="hello-link"
        >
          Go to Hello
        </Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="learn-react-link"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
