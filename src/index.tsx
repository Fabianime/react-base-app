import Header from '@components/Header/Header';
import Home from '@views/Home/Home';
import Profil from '@views/Profil/Profil';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './i18n';

ReactDOM.render(
  <>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profil" component={Profil} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </>,
  document.getElementById('root'),
);
