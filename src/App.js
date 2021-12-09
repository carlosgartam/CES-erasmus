
import './App.css';
import './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, BrowserRouter,Route} from 'react-router-dom'
import ListSubjects from './components/ListSubjects';
import Subject from './components/Subject';
import User from './components/User';
function App() {
  return (
    <div> 
      <Nav/>  
      <BrowserRouter> 
      <Routes>
      <Route path="/" exact element={<ListSubjects/>}/>
      <Route path="/:id" exact element={<Subject/>}/>
      <Route path="/login" exact element={<User/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">ErasmusHelper</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home </a>
          <a className="nav-item nav-link" href="#">LA</a>
          <a className="nav-item nav-link" href="#">Account</a>
        </div>
      </div>
    </nav>
  );
}

export default App;
