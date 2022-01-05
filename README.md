### quotes-react-router

``` javascript
import { BrowserRouter } from 'react-router-dom';
```

``` javascript
// src/pages
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";

const { id } = useParams();

<Route path={`/quotes/${id}/comments`}>
    <Comments />
</Route>
```

``` javascript
import { useHistory } from 'react-router-dom';

const history = useHistory();

const addQuoteHandler = (quote) => {
    // add to quote list
    console.log(quote);
    history.push('/quotes');
}
```

``` javascript
import { NavLink } from 'react-router-dom';
<nav className={styles.nav}>
    <ul>
        <li><NavLink to="/quotes" activeClassName={styles.active}>Quotes</NavLink></li>
        <li><NavLink to="/new-quote" activeClassName={styles.active}>New Quote</NavLink></li>
    </ul>
</nav>
```

``` javascript
import { Link } from 'react-router-dom';
<Link to={`/quotes/${props.id}`} className='btn'>
    View Fullscreen
</Link>
```
