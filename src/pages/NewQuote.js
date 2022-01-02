import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';

export const NewQuote = (params) => {

    const history = useHistory();

    const addQuoteHandler = (quote) => {
        // add to quote list
        console.log(quote);
        history.push('/quotes');
    }


    return (
        <div>
            <h1>New Quote</h1>
            <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />
        </div>
    )
}

export default NewQuote;