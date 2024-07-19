// import logo from './logo.svg';
import './Common.css';
import './index.css';

function Common() {
  return (
    <div className="Common-Title">
      <div className = "Common-menu"> </div>
      <div className ="Common-margin"/>
        <div className ="Common-date">
          <p>2024 / 12 / 21</p> 
          <div>S A T U R D A Y</div> 
        </div>
        
      
       <header className="Common-greeting">
        <p>민기♥선우 결혼식에 초대합니다</p>
        
        <a
          className="Common-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          방명록 쓰기
        </a>
      </header> 
    </div>
  );
}

export default Common;
