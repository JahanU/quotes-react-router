import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import DetailedQuote from './pages/DetailedQuote';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import notFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={AllQuotes}><Redirect to="/quotes" /></Route>
        <Route path="/quotes" exact component={AllQuotes} />
        <Route path="/quotes/:id" component={DetailedQuote} />
        <Route path="/new-quote" component={NewQuote} />
        <Route path="*" component={notFound} />
      </Switch>
    </Layout>
  );
}

export default App;
