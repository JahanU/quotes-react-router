import QuoteList from '../components/quotes/QuoteList';
import { getAllQuotes } from '../lib/api';
import { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound';

export const AllQuotes = (params) => {

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    console.log(loadedQuotes);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return (
            <div className='centered'>
                <h3>Error</h3>
            </div>
        )
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return (
        <div>
            <h1>All Quotes</h1>
            <QuoteList quotes={loadedQuotes} />

        </div>
    )

}

export default AllQuotes;