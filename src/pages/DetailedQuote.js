import { useParams } from "react-router-dom";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const dummyData = [
    { id: 1, author: 'Nelson Mandela', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall' },
    { id: 2, author: 'John Lennon', quote: 'Life is what happens when you/\'re busy making other plans.' },
    { id: 3, author: 'Walt Disney', quote: 'The way to get started is to quit talking and begin doing' },
]

export const DetailedQuote = (props) => {

    const match = useRouteMatch();
    const { id } = useParams();
    const quoteData = dummyData.find(q => q.id === parseInt(id));

    if (!quoteData) {
        return <div>Quote not found</div>
    }
    return (
        <div>
            <HighlightedQuote {...quoteData} />
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </div >
    )
}

export default DetailedQuote;