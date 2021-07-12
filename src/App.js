
import './App.css';
import Home from './components/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
// import Personal from './components/personal';
import PersonalList from './components/PersonalList';
import WorkList from './components/WorkList';
import HolidayList from './components/HolidayList';

function App() {
  return (<>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/personallist" component={PersonalList}></Route>
      <Route  exact path="/WorkList" component={WorkList}></Route>
      <Route exact path="/HolidayList" component={HolidayList}></Route>
    </Switch>
      
    </>
  );
}

export default App;
