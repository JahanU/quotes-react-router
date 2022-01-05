import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
// import DetailedQuote from './pages/DetailedQuote';
// import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
// import notFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const DetailedQuote = React.lazy(() => import('./pages/DetailedQuote'));
const notFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Switch>
          <Route path="/" exact component={AllQuotes}><Redirect to="/quotes" /></Route>
          <Route path="/quotes" exact component={AllQuotes} />
          <Route path="/quotes/:id" component={DetailedQuote} />
          <Route path="/new-quote" component={NewQuote} />
          <Route path="*" component={notFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
