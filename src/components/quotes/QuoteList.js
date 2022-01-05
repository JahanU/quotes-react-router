import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useHistory, useLocation } from 'react-router-dom';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();

  const queryParam = new URLSearchParams(location.search);
  let sorting = queryParam.get('sort');
  sorting = sorting === 'asc' ? 'desc' : 'asc';

  console.log(sorting)
  const sortedQuotes = sortQuotes(props.quotes, sorting === 'asc');

  const changeSortHandler = (event) => {
    history.push('/quotes?sort=' + sorting);
  }


  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}> Sort {sorting.toUpperCase()}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            quote={quote.quote}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
