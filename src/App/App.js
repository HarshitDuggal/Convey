import Navbar from '../Navbar/Navbar'
import Help from '../Help/Help'
import Contact from '../Contact/Contact';
import About from '../About/About';
import Home from '../Home/Home';
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
