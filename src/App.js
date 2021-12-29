import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import DetailedQuote from './pages/DetailedQuote';
import NewQuote from './pages/NewQuote';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact component={AllQuotes}><Redirect to="/quotes" /></Route>
        <Route path="/quotes" exact component={AllQuotes} />
        <Route path="/quotes/:id" component={DetailedQuote} />
        <Route path="/new-quote" component={NewQuote} />
      </Switch>
    </>
  );
}

export default App;
