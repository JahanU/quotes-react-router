import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';

export const NewQuote = (params) => {

    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [history, status]);


    const addQuoteHandler = (quote) => {
        sendRequest(quote);
        console.log(quote);
    }


    return (
        <div>
            <h1>New Quote</h1>
            <QuoteForm
                onAddQuote={addQuoteHandler}
                isLoading={status === 'pending'} />
        </div>
    )
}

export default NewQuote;