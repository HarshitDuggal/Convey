import Navbar from './Navbar'
import Help from './Help'
import Contact from './Contact';
import About from './About';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <Navbar/>
        <div className='Content'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path='/about'>
              <About/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path='/contact'>
              <Contact/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path='/help'>
              <Help/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
