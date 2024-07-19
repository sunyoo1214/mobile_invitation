import logo from './logo.svg';
import './Common.css';

function Common() {
  return (
    <div className="Common">
      <header className="Common-header">
        <img src={logo} className="Common-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Common-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Common;
