import QuoteList from '../components/quotes/QuoteList';

const dummyData = [
    { id: 1, author: 'Nelson Mandela', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall' },
    { id: 2, author: 'John Lennon', quote: `Life is what happens when you're busy making other plans.` },
    { id: 3, author: 'Walt Disney', quote: 'The way to get started is to quit talking and begin doing' },
]

export const AllQuotes = (params) => {
    return (
        <div>
            <h1>All Quotes</h1>
            <QuoteList quotes={dummyData} />
        </div>
    )

}

export default AllQuotes;