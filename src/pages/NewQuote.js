import QuoteForm from '../components/quotes/QuoteForm';

export const NewQuote = (params) => {

    const addQuoteHandler = (quote) => {
        // add to quote list
    }


    return (
        <div>
            <h1>New Quote</h1>
            <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />
        </div>
    )
}

export default NewQuote;